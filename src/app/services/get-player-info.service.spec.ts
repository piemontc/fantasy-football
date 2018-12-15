import { TestBed } from '@angular/core/testing';

import { GetPlayerInfoService } from './get-player-info.service';

describe('GetPlayerInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetPlayerInfoService = TestBed.get(GetPlayerInfoService);
    expect(service).toBeTruthy();
  });
});
