import { Component, Input, OnInit } from '@angular/core';
import { HeadlineService } from '../headline.service';
import { Headline } from '../shared/headline';

@Component({
  selector: 'app-galaxy-display',
  templateUrl: './galaxy-display.component.html',
  styleUrls: ['./galaxy-display.component.css']
})
export class GalaxyDisplayComponent implements OnInit {
  private headlineService: HeadlineService;
  // The data of the headlines
  private headlines: Headline[];
  private selectedHeadline: Headline;
  // The visualized headlines as planets
  private headlinePlanets;

  constructor(headlineService: HeadlineService) {
    this.headlineService = headlineService;

    // Subscribe to the change in headline selected
    headlineService.headlineChanged$.subscribe(
      // Update the selected headline to the headline returned
      // by the service subscription
      headline => this.selectedHeadline = headline
    );
   }

  ngOnInit() {
    // Get the headlines from the HeadlineService
    this.headlineService.getHeadlinesSlowly().then(
      headlines => this.headlines = headlines
    );
  }

}
