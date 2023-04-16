import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxLiteVideoComponent } from './ngx-lite-video.component';

describe('NgxLiteVideoComponent', () => {
  let component: NgxLiteVideoComponent;
  let fixture: ComponentFixture<NgxLiteVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ NgxLiteVideoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxLiteVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
