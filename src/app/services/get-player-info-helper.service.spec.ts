import { TestBed } from '@angular/core/testing';

import { GetPlayerInfoHelperService } from './get-player-info-helper.service';

describe('GetPlayerInfoHelperService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetPlayerInfoHelperService = TestBed.get(GetPlayerInfoHelperService);
    expect(service).toBeTruthy();
  });
});
