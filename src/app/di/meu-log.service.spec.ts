import { TestBed } from '@angular/core/testing';

import { MeuLogService } from './meu-log.service';

describe('MeuLogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MeuLogService = TestBed.get(MeuLogService);
    expect(service).toBeTruthy();
  });
});
