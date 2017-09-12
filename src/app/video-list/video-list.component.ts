import { Video } from './../video';
import { Component, OnInit } from '@angular/core';
// Use by directives and components to emit custom Events.
import { EventEmitter } from '@angular/core';
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css'],
  inputs: ['videos'],
  outputs: ['SelectVideo']
})
export class VideoListComponent implements OnInit {

  public SelectVideo = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  // 18-2
  // (click)="onSelect(video)" 實作 (click)觸發的function
  onSelect(vid: Video) {
    // 送出一個 SelectVideo directives 給 上層的 component 抓
    this.SelectVideo.emit(vid);
  }

}
