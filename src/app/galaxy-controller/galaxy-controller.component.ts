import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HeadlineService } from '../headline.service';
import { Headline } from '../shared/headline';



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
  private headlinesList: Headline[];
  private friendsList;

  onSelectHeadlines() {
    this.getHeadlines();
    this.friendsList = null;
  }
  onSelectFriends() {
    this.friendsList = FRIENDS;
    this.headlinesList = null;
  }

  // HELPER METHODS
  getHeadlines() {
    this.headlineService.getHeadlinesSlowly().then(headlines => this.headlinesList = headlines);
  }

  // ADMIN METHODS
  constructor(private headlineService: HeadlineService) {
    this.headlinesList = null;
    this.friendsList = null;
  }

  ngOnInit(): void {
    this.getHeadlines();
  }

}
