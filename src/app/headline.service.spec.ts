/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HeadlineService } from './headline.service';

describe('Service: Headline', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeadlineService]
    });
  });

  it('should ...', inject([HeadlineService], (service: HeadlineService) => {
    expect(service).toBeTruthy();
  }));
});
