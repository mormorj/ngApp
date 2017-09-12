import { Component, OnInit } from '@angular/core';
import { Video } from './../video';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css'],
  inputs: ['video'] // 18-6 video-center 送過來的 selectedVideo
})
export class VideoDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
