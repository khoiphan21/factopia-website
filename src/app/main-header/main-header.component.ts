import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {
  @Input()
  homeSelected: boolean;
  @Input()
  exploreSelected: boolean;
  @Input()
  friendSelected: boolean;
  @Input()
  headlineSelected: boolean;


  constructor() { }

  ngOnInit() {
  }

}
