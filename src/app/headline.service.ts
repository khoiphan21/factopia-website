import { Injectable } from '@angular/core';
import { Headline } from './shared/headline';
import { HEADLINES } from './data/headlines';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class HeadlineService {
  // Private variables of the service
  private selectedHeadline: Headline;

  // Observable headline sources
  private headlineHoverAnnouncementSource = new Subject<Headline>();
  // Observable headline streams
  headlineHoverChanged$ = this.headlineHoverAnnouncementSource.asObservable();
  // Method called when a headline is selected
  annouceHeadlineHovered(headline: Headline) {
    this.headlineHoverAnnouncementSource.next(headline);
  }


  // Getter and Setter for the selected headline variable
  setSelectedHeadline(selectedHeadline: Headline) {
    this.selectedHeadline = selectedHeadline;
  }
  getSelectedHeadline(): Headline {
    return this.selectedHeadline;
  }

  // Retrieve the list of headlines
  getHeadlines(): Promise<Headline[]> {
    return Promise.resolve(HEADLINES);
  }
  getHeadlinesSlowly(): Promise<Headline[]> {
    return new Promise<Headline[]>(resolve =>
    setTimeout(resolve, 1000))
    .then(() => this.getHeadlines());
  } // with a delay

  constructor() { }

}
