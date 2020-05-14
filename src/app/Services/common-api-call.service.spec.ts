import { TestBed } from '@angular/core/testing';

import { CommonApiCallService } from './common-api-call.service';

describe('CommonApiCallService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommonApiCallService = TestBed.get(CommonApiCallService);
    expect(service).toBeTruthy();
  });
});
