import { TestBed } from '@angular/core/testing';

import { CocktailDBApiService } from '../services/cocktaildb-api.service';

describe('CocktaildbApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CocktailDBApiService = TestBed.get(CocktailDBApiService);
    expect(service).toBeTruthy();
  });
});
