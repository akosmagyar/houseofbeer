import {inject, TestBed} from '@angular/core/testing';

import {BrewingService} from './brewing.service';

describe('BrewingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BrewingService]
    });
  });

  it('should be created', inject([BrewingService], (service: BrewingService) => {
    expect(service).toBeTruthy();
  }));
});
