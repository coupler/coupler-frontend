import { TestBed, inject } from '@angular/core/testing';

import { LinkageMatchService } from './linkage-match.service';

describe('LinkageMatchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LinkageMatchService]
    });
  });

  it('should ...', inject([LinkageMatchService], (service: LinkageMatchService) => {
    expect(service).toBeTruthy();
  }));
});
