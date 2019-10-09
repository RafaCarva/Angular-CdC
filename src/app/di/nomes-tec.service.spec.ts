import { TestBed } from '@angular/core/testing';

import { NomesTecService } from './nomes-tec.service';

describe('NomesTecService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NomesTecService = TestBed.get(NomesTecService);
    expect(service).toBeTruthy();
  });
});
