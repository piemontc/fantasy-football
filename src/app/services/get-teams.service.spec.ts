import { TestBed } from '@angular/core/testing';

import { GetTeamsService } from './get-teams.service';

describe('GetTeamsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetTeamsService = TestBed.get(GetTeamsService);
    expect(service).toBeTruthy();
  });
});
