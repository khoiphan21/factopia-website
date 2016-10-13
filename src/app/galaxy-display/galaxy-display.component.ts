import { Component, OnInit } from '@angular/core';
import { HeadlineService } from '../headline.service';
import { Headline } from '../shared/headline';

export class Coordinate {
  x: number;
  y: number;
}

@Component({
  selector: 'app-galaxy-display',
  templateUrl: './galaxy-display.component.html',
  styleUrls: ['./galaxy-display.component.css']
})
export class GalaxyDisplayComponent implements OnInit {
  // Services
  private headlineService: HeadlineService;

  // CONSTANTS
  MIN_DISTANCE = 300;

  // The data of the headlines
  private headlines: Headline[];
  private selectedHeadline: Headline;

  // Variable to control which planet option to display
  private friendOption = false;
  private planetOption = true;

  // Data to visualize headlines
  private maximumViews = 0;
  private sizeMultiplier = 1;

  // TEMPORARY VARIABLE: HOLD RANDOM COORDINATES
  private randomCoordinates: Coordinate[] = [];

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
  randomizeCoordinates(amount: number) {
    for (let i = 0; i < amount; i++) {
      this.randomCoordinates.push({
        x: this.randomX(),
        y: this.randomY()
      });
      this.checkDistanceBetweenCoordinates();
    }
  }
  checkDistanceBetweenCoordinates() {
    for (let i = 0; i < this.randomCoordinates.length; i++) {
      while (this.calculateMinDistance(i)) {
        // Generate a new random coordinate at the given index
        this.randomCoordinates[i] = {
          x: this.randomX(),
          y: this.randomY()
        }
      }
    }
  }
  calculateMinDistance(index: number): boolean {
    let givenCoordinate = this.randomCoordinates[index];
    for (let i = 0; i < this.randomCoordinates.length; i++) {
      if (i !== index) {
        if (Math.sqrt(
        Math.pow(givenCoordinate.x - this.randomCoordinates[i].x, 2)
        +
        Math.pow(givenCoordinate.y - this.randomCoordinates[i].y, 2)
        ) < this.MIN_DISTANCE) {
          // distance is too close
          return false;
        }
      }
    }
  }

  randomX(): number {
    return (Math.random() * 800);
  }
  randomY(): number {
    return (Math.random() * 300);
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
        this.randomizeCoordinates(headlines.length);

        // Set which option to show
        this.planetOption = true;
        this.friendOption = false;

        // Things will start to get rendered when this is called
        this.headlines = headlines;
        this.calculateMaxViews();

      }
    );
  }

}
