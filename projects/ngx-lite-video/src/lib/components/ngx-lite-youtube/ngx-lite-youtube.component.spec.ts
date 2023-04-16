import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxLiteYoutubeComponent } from './ngx-lite-youtube.component';

describe('NgxLiteYoutubeComponent', () => {
  let component: NgxLiteYoutubeComponent;
  let fixture: ComponentFixture<NgxLiteYoutubeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ NgxLiteYoutubeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxLiteYoutubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
