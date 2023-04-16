import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxLiteVimeoComponent } from './ngx-lite-vimeo.component';

describe('NgxLiteVimeoComponent', () => {
  let component: NgxLiteVimeoComponent;
  let fixture: ComponentFixture<NgxLiteVimeoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ NgxLiteVimeoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxLiteVimeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
