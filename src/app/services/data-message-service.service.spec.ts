import { TestBed } from '@angular/core/testing';

import { DataMessageServiceService } from './data-message-service.service';

describe('DataMessageServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataMessageServiceService = TestBed.get(DataMessageServiceService);
    expect(service).toBeTruthy();
  });
});
