import { Component, OnInit } from '@angular/core';

const HEADLINES = [
  {title: 'Can banana help decrease blood pressure?'},
  {title: 'Who will be the next President?'},
  {title: 'HOT: Eating too much rice is not good!'},
  {title: 'Does an apple a day actually keep the doctors away?'},
  {title: 'Fruits that are good for teeth'},
  {title: 'All about Beyonce\'s new albulm'}
];

const FRIENDS = [
  {name: 'Khoi'},
  {name: 'Nhan'},
  {name: 'Soobin'},
  {name: 'Bella'},
  {name: 'Vicky'},
  {name: 'Jack'},
]

@Component({
  selector: 'app-galaxy-controller',
  templateUrl: './galaxy-controller.component.html',
  styleUrls: ['./galaxy-controller.component.css']
})
export class GalaxyControllerComponent implements OnInit {
  headlinesList;
  friendsList;

  onSelectHeadlines() {
    this.headlinesList = HEADLINES;
    this.friendsList = null;
  }

  onSelectFriends() {
    this.friendsList = FRIENDS;
    this.headlinesList = null;
  }

  constructor() {
    this.headlinesList = HEADLINES;
    this.friendsList = null;
  }

  ngOnInit() {
  }

}
