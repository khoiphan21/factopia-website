import { Component, OnInit } from '@angular/core';
import { HeadlineService } from '../../headline.service';
import { Headline } from '../../shared/headline';

@Component({
  selector: 'app-galaxy-controller',
  templateUrl: './galaxy-controller.component.html',
  styleUrls: ['./galaxy-controller.component.css']
})
export class GalaxyControllerComponent implements OnInit {
  private headlinesList: Headline[];

  onSelectHeadlines() {
    this.getHeadlines();
  }

  // HELPER METHODS
  getHeadlines() {
    this.headlineService.getHeadlinesSlowly().then(headlines => this.headlinesList = headlines);
  }

  // ADMIN METHODS
  constructor(private headlineService: HeadlineService) {
    this.headlinesList = null;
  }

  ngOnInit(): void {
    this.getHeadlines();
  }

}
