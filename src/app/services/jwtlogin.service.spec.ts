import { TestBed } from '@angular/core/testing';

import { JwtloginService } from './jwtlogin.service';

describe('JwtloginService', () => {
  let service: JwtloginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JwtloginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
