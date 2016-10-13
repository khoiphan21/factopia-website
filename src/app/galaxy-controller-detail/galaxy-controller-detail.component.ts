import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-galaxy-controller-detail',
  templateUrl: './galaxy-controller-detail.component.html',
  styleUrls: ['./galaxy-controller-detail.component.css']
})
export class GalaxyControllerDetailComponent implements OnInit {

  @Input()
  headlinesList;

  @Input()
  friendsList;

  constructor() { }

  ngOnInit() {
  }

}
