import { TestBed } from '@angular/core/testing';

import { GetAirlinesService } from './get-airlines.service';

describe('GetAirlinesService', () => {
  let service: GetAirlinesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAirlinesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
