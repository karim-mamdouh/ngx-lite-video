import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxLiteYoutubeComponent } from 'projects/ngx-lite-video/src/lib/components';

@NgModule({
  declarations: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [BrowserModule, AppRoutingModule, NgxLiteYoutubeComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
