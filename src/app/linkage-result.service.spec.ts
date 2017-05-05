import { TestBed, inject } from '@angular/core/testing';

import { LinkageResultService } from './linkage-result.service';

describe('LinkageResultService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LinkageResultService]
    });
  });

  it('should ...', inject([LinkageResultService], (service: LinkageResultService) => {
    expect(service).toBeTruthy();
  }));
});
