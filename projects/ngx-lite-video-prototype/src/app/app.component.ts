import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  youtubeId: string = '6drfp_3823I';
  vimeoId: string = '786570322';

  youtubeVideos: Array<{ id: string }> = [{ id: '6drfp_3823I' }, { id: 'Ys7xdebd66Y' }]
  vimeoVideos: Array<{ id: string }> = [{ id: '786570322' }, { id: '806024932' }]

  changeYoutubeVideo(index: number): void {
    this.youtubeId = this.youtubeVideos[index].id;
  }
  changeVimeoVideo(index: number): void {
    this.vimeoId = this.vimeoVideos[index].id
  }
}
