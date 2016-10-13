import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Headline } from '../shared/headline';
import { HeadlineService } from '../headline.service';


@Component({
  selector: 'app-galaxy-controller-detail',
  templateUrl: './galaxy-controller-detail.component.html',
  styleUrls: ['./galaxy-controller-detail.component.css']
})
export class GalaxyControllerDetailComponent implements OnInit {
  // Services
  private headlineService: HeadlineService;

  // Class variables
  private selectedHeadline: Headline;

  @Input()
  headlinesList;

  @Input()
  friendsList;

  // This is called when a headline is selected
  onSelectHeadline(headline: Headline) {
    this.selectedHeadline = headline;

    // Announce the change in headline selected
    this.headlineService.annouceHeadlineHovered(headline);
  }
  onDeselectHeadline() {
    this.selectedHeadline = null;
    this.headlineService.annouceHeadlineHovered(null);
  }

  constructor(headlineService: HeadlineService) {
    this.headlineService = headlineService;
   }


  ngOnInit() {
  }

}
