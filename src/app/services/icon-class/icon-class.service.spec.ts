import { TestBed } from '@angular/core/testing';

import { IconClassService } from './icon-class.service';

describe('IconClassService', () => {
  let service: IconClassService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IconClassService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
