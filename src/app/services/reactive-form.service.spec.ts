import { TestBed, inject } from '@angular/core/testing';

import { ReactiveFormService } from './reactive-form.service';

describe('ReactiveFormService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReactiveFormService]
    });
  });

  it('should be created', inject([ReactiveFormService], (service: ReactiveFormService) => {
    expect(service).toBeTruthy();
  }));
});
