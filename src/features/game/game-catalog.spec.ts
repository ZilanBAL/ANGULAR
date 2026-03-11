import { TestBed } from '@angular/core/testing';

import { GameCatalog } from './game-catalog';

describe('GameCatalog', () => {
  let service: GameCatalog;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameCatalog);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
