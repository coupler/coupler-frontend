import { TestBed } from '@angular/core/testing';

import { DatasetExportService } from './dataset-export.service';

describe('DatasetExportService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DatasetExportService = TestBed.get(DatasetExportService);
    expect(service).toBeTruthy();
  });
});
