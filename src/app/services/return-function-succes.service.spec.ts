import { TestBed } from '@angular/core/testing';

import { ReturnFunctionSuccesService } from './return-function-succes.service';

describe('ReturnFunctionSuccesService', () => {
  let service: ReturnFunctionSuccesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReturnFunctionSuccesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
