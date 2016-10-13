import { Component, OnInit } from '@angular/core';
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

  // Variable to control which planet option to display
  private friendOption = false;
  private planetOption = true;

  // Data to visualize headlines
  private maximumViews = 0;
  private sizeMultiplier = 1;

  // HELPER METHODS
  calculateMaxViews() {
    for (let i = 0; i < this.headlines.length; i++) {
      if (this.maximumViews < this.headlines[i].views) {
        this.maximumViews = this.headlines[i].views;
      }
    }
  }
  calculateSizeMultiplier(max: number, given: number): Number {
    if ((given / max) < 0.25) {
      return 1.8;
    } else if ((given / max) < 0.5) {
      return 1.5;
    } else if ((given / max) < 0.75) {
      return 1.25;
    } else {
      return 1.1;
    }
  }

  // Event method callback
  onPlanetHover(headline: Headline) {
    this.selectedHeadline = headline;
    this.sizeMultiplier = (Number) (this.calculateSizeMultiplier(this.maximumViews, headline.views));
    document.body.style.cursor = 'pointer';
  }
  onPlanetUnhover() {
    this.selectedHeadline = null;
    this.sizeMultiplier = 1;
    document.body.style.cursor = 'auto';
  }

  // ADMIN METHODS
  constructor(headlineService: HeadlineService) {
    this.headlineService = headlineService;

    // Subscribe to the change in headline selected
    headlineService.headlineHoverChanged$.subscribe(
      // Update the selected headline to the headline returned
      // by the service subscription
      headline => this.selectedHeadline = headline
    );
   }

  ngOnInit() {
    // Get the headlines from the HeadlineService
    this.headlineService.getHeadlinesSlowly().then(
      headlines => {
        this.headlines = headlines;
        this.calculateMaxViews();

        // Set which option to show
        this.planetOption = true;
        this.friendOption = false;
      }
    );
  }

}
