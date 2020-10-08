import { TestBed } from '@angular/core/testing';

import { YkToolsService } from './yk-tools.service';

describe('YkToolsService', () => {
  let service: YkToolsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YkToolsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
