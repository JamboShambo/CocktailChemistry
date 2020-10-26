import { TestBed } from '@angular/core/testing';

import { CocktailDatabaseService } from './cocktaildatabase.service';

describe('CocktaildatabaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CocktailDatabaseService = TestBed.get(CocktailDatabaseService);
    expect(service).toBeTruthy();
  });
});
