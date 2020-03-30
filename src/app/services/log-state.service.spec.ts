import { TestBed } from '@angular/core/testing';

import { LoginServer } from './login-server.service';

describe('LogStateService', () => {
  let service: LoginServer;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginServer);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
