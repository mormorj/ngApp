// VideoCenter -> input -> VideoList -> Display List
// VideoList -> output -> VideoCenter -> Capture Selected Video
//    透過(click)="onSelect(video)"
// VideoCenter -> input -> VideoDetail -> Display Detail
import { Component, OnInit } from '@angular/core';
import { Video } from './../video';

@Component({
  selector: 'app-video-center',
  templateUrl: './video-center.component.html',
  styleUrls: ['./video-center.component.css']
})
export class VideoCenterComponent implements OnInit {

  // 因為video-center包video-detail,video-list 所以video-list可以讀得到videos
  videos: Video[] = [
    { '_id': '1', 'title': 'Title 1', 'url': 'url 1', 'description': 'desc 1' },
    { '_id': '2', 'title': 'Title 2', 'url': 'url 2', 'description': 'desc 2' },
    { '_id': '3', 'title': 'Title 3', 'url': 'url 3', 'description': 'desc 3' },
    { '_id': '4', 'title': 'Title 4', 'url': 'url 4', 'description': 'desc 4' }
  ];

  selectedVideo: Video;

  constructor() { }

  ngOnInit() {
  }
  // 18-4
  onSelectVideo(video: any) {
    this.selectedVideo = video;
    console.log(this.selectedVideo); // selectedVideo 給 video-detail 顯示出來
  }

}
