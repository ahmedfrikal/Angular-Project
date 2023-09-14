import { TestBed } from '@angular/core/testing';

import { ReturnFunctionErrorService } from './return-function-error.service';

describe('ReturnFunctionErrorService', () => {
  let service: ReturnFunctionErrorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReturnFunctionErrorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
