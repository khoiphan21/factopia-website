import { Injectable } from '@angular/core';
import { Headline } from './shared/headline';
import { HEADLINES } from './data/headlines';

@Injectable()
export class HeadlineService {
  getHeadlines(): Promise<Headline[]> {
    return Promise.resolve(HEADLINES);
  }
  getHeadlinesSlowly(): Promise<Headline[]> {
    return new Promise<Headline[]>(resolve =>
    setTimeout(resolve, 2000))
    .then(() => this.getHeadlines());
  }

  constructor() { }

}
