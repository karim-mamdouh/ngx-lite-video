// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
// Components
import { NgxLiteVimeoComponent } from './ngx-lite-vimeo.component';

@NgModule({
  declarations: [NgxLiteVimeoComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [NgxLiteVimeoComponent],
})
export class NgxLiteVimeoModule {}
