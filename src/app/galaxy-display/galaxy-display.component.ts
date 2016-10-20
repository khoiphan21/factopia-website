import { Component, OnInit } from '@angular/core';
import { HeadlineService } from '../headline.service';
import { Headline } from '../shared/headline';

import { ARTICLES } from '../data/articles';

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
  MIN_DISTANCE = 200;

  // TODO: REMOVE THIS
  // The data of the headlines
  private headlines: Headline[];
  private selectedHeadline: Headline;

  // The data of the article
  private article = ARTICLES[0];

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
      this.randomCoordinates.push(this.createRandomCoordinate());
    }
  }
  createRandomCoordinate(): Coordinate {
    return {
      x: this.randomX(),
      y: this.randomY()
    };
  }
  checkOverlappingPlanets() {
    for (let i = 0; i < this.headlines.length; i++) {
      let planet = null;
      while (planet == null) {
        planet = document.getElementById('planet-' + i);
      }
      console.log(planet);
      for (let j = 0; j < this.headlines.length; j++) {
        if (i !== j) {
          let otherPlanet = document.getElementById('planet-' + j);
          while (this.checkShapeOverlapping(
            planet.getBoundingClientRect(),
            otherPlanet.getBoundingClientRect()
          )) {
            // If true, there is an overlapping, so re-create the random coords
            this.randomCoordinates[i] = this.createRandomCoordinate();
          }
        }
      }
    }
  }
  checkShapeOverlapping(rect1: ClientRect, rect2: ClientRect): boolean {
    return !(rect1.right < rect2.left ||
                rect1.left > rect2.right ||
                rect1.bottom < rect2.top ||
                rect1.top > rect2.bottom);
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
    let display = document.getElementsByClassName('galaxy');
    return (Math.random() * (display[0].getBoundingClientRect().width - 200));
  }
  randomY(): number {
    let display = document.getElementsByClassName('galaxy');
    return (Math.random() * (display[0].getBoundingClientRect().height - 200));
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
    )
  }

}
