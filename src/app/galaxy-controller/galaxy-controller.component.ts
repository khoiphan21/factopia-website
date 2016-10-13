import { Component, OnInit } from '@angular/core';
import { Headline } from '../shared/headline';

const HEADLINES: Headline[] = [
  {
    title: 'Does banana help decrease blood pressure?',
    views: 100,
    holisticScore: 20
  },
  {
    title: 'Who will be the next President?',
    views: 51,
    holisticScore: 32
  },
  {
    title: 'HOT: Eating too much rice is not good!',
    views: 12,
    holisticScore: 10
  },
  {
    title: 'Does an apple a day actually keep the doctors away?',
    views: 32,
    holisticScore: 75
  },
  {
    title: 'Fruits that are good for teeth',
    views: 47,
    holisticScore: 95
  },
  {
    title: 'All about Beyonce\'s new albulm',
    views: 320,
    holisticScore: 91
  }
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
