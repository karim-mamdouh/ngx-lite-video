import { TestBed } from '@angular/core/testing';

import { NgxLiteVideoGeneralServiceService } from './ngx-lite-video-general-service.service';

describe('NgxLiteVideoGeneralServiceService', () => {
  let service: NgxLiteVideoGeneralServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxLiteVideoGeneralServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
