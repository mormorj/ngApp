import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css'],
  inputs: ['videos']
})
export class VideoListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
