import { Component, OnInit, Input } from '@angular/core';

import { Article } from '../../shared/article';

@Component({
  selector: 'app-planet-overview',
  templateUrl: './planet-overview.component.html',
  styleUrls: ['./planet-overview.component.css']
})
export class PlanetOverviewComponent implements OnInit {
  @Input()
  article: Article;

  isMessageShown = false;

  showMessage() {
    this.isMessageShown = true;
  }

  constructor() { }

  ngOnInit() {
  }

}
