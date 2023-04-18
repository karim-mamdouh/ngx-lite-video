import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngx-lite-video-prototype';
  youtubeId = "6drfp_3823I"
  youtubeTitle="London Grammar - Strong [Official Video]"
  vimeoId = "786570322"
  change() {
    this.youtubeId = "tHFMD2f__iA";
    this.youtubeTitle="الفراقية لابن زريق البغدادي | أحمد بن عبدالعزيز النفيس"
    this.vimeoId = '818118134'
  }
}
