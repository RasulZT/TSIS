import { TestBed } from '@angular/core/testing';

import { TargetElementsService } from './target-elements.service';

describe('TargetElementsService', () => {
  let service: TargetElementsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TargetElementsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
