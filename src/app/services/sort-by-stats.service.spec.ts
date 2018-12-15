import { TestBed } from '@angular/core/testing';

import { SortByStatsService } from './sort-by-stats.service';

describe('SortByStatsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SortByStatsService = TestBed.get(SortByStatsService);
    expect(service).toBeTruthy();
  });
});
