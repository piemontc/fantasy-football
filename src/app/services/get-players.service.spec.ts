import { TestBed } from '@angular/core/testing';

import { GetPlayersService } from './get-players.service';

describe('GetPlayersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetPlayersService = TestBed.get(GetPlayersService);
    expect(service).toBeTruthy();
  });
});
