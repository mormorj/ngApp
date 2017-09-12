const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Video = require('../models/video');

const db = "mongodb://uservishwas:ji32k7xl3g@ds131854.mlab.com:31854/videoplayer";
mongoose.Promise = global.Promise;
mongoose.connect(db, function(err) {
    if (err) {
        console.error("Error! " + err);
    } else {
        console.error("success");
    }
});

//get http://localhost:3000/api/videos
router.get('/videos', function(req, res) {
    console.log('Get request for all videos');
    Video.find({})
        .exec(function(err, videos) {
            if (err) {
                console.log("Error retrieving videos");
            } else {
                //console.log(videos);
                res.json(videos);
            }
        });
});
//get http://localhost:3000/api/videos/59b685daf36d2860f7d5810b
router.get('/videos/:id', function(req, res) {
    console.log('Get request for a single video');
    Video.findById(req.params.id)
        .exec(function(err, video) {
            if (err) {
                console.log("Error retrieving videos");
            } else {
                //console.log(videos);
                res.json(video);
            }
        });
});
//insert post body x-www-form-urlencoded
router.post('/video', function(req, res) {
    console.log('Post a video');
    var newVideo = new Video();
    newVideo.title = req.body.title;
    newVideo.url = req.body.url;
    newVideo.description = req.body.description;
    newVideo.save(function(err, insertedVideo) {
        if (err) {
            console.log('Error saving vide');
        } else {
            res.json(insertedVideo);
        }
    });
});
//update put http://localhost:3000/api/video/59b69619cb56ec073ee87394
//new: true //則下面的callback function才會return updatedVideo
router.put('/video/:id', function(req, res) {
    console.log('Update a video');
    Video.findByIdAndUpdate(req.params.id, {
            //x-www-form-urlencoded
            $set: { title: req.body.title, url: req.body.url, description: req.body.description }
        }, {
            new: true
        },
        function(err, updatedVideo) {
            if (err) {
                res.send("Error updating video");
            } else {
                res.json(updatedVideo);
            }
        }
    );
});
//DELETE http://localhost:3000/api/video/59b69eccfab11d085086c0e6
router.delete('/video/:id', function(req, res) {
    console.log('Deleting a video');
    Video.findByIdAndRemove(req.params.id, function(err, deletedVideo) {
        if (err) {
            res.send("Error deleting video");
        } else {
            res.json(deletedVideo);
        }
    });
});

module.exports = router;