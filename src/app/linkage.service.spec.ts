import { TestBed, inject } from '@angular/core/testing';

import { LinkageService } from './linkage.service';

describe('LinkageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LinkageService]
    });
  });

  it('should ...', inject([LinkageService], (service: LinkageService) => {
    expect(service).toBeTruthy();
  }));
});
