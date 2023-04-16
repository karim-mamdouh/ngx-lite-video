import { TestBed } from '@angular/core/testing';

import { NgxLiteVideoService } from './ngx-lite-video.service';

describe('NgxLiteVideoService', () => {
  let service: NgxLiteVideoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxLiteVideoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
