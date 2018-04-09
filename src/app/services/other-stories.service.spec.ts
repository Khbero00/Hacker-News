import { TestBed, inject } from '@angular/core/testing';

import { OtherStoriesService } from './other-stories.service';

describe('OtherStoriesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OtherStoriesService]
    });
  });

  it('should be created', inject([OtherStoriesService], (service: OtherStoriesService) => {
    expect(service).toBeTruthy();
  }));
});
