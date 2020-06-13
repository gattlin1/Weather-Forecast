import { TestBed } from '@angular/core/testing';

import { WeatherLookupService } from './weather-lookup.service';

describe('WeatherLookupService', () => {
  let service: WeatherLookupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherLookupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
