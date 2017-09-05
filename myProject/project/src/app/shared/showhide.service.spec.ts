import { TestBed, inject } from '@angular/core/testing';

import { ShowhideService } from './showhide.service';

describe('ShowhideService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShowhideService]
    });
  });

  it('should be created', inject([ShowhideService], (service: ShowhideService) => {
    expect(service).toBeTruthy();
  }));
});
