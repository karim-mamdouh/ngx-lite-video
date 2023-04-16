import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxLiteVideoComponent } from 'projects/ngx-lite-video/src/public-api';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, NgxLiteVideoComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
