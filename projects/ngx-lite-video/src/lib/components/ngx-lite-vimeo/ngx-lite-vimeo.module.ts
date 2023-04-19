import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxLiteVimeoComponent } from './ngx-lite-vimeo.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [NgxLiteVimeoComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [NgxLiteVimeoComponent],
})
export class NgxLiteVimeoModule {}
