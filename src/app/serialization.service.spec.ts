import { TestBed, inject } from '@angular/core/testing';

import { SerializationService } from './serialization.service';

describe('SerializationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SerializationService]
    });
  });

  it('should be created', inject([SerializationService], (service: SerializationService) => {
    expect(service).toBeTruthy();
  }));
});
