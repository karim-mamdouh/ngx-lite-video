import {
  ChangeDetectionStrategy,
  Component,
  Input,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { BehaviorSubject, Observable } from 'rxjs';
import { ThumbSize } from '../../models';
import { NgxLiteVideoGeneralService } from '../../services/ngx-lite-video-general-service.service';
import { SafeUrl } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'ngx-lite-vimeo',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './ngx-lite-vimeo.component.html',
  styleUrls: ['./ngx-lite-vimeo.component.scss'],
  providers: [NgxLiteVideoGeneralService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgxLiteVimeoComponent {
  //#region Declerations
  _showIframe$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  _videoUrl!: SafeUrl;
  _vimeoBanner$!: Observable<any>;

  /**
   * Video ID to be viewed
   * @type string
   * @Required true
   */
  @Input() set videoId(id: string) {
    this.__ngxService.hasNoVideoId(id);

    this._vimeoBanner$ = this.__ngxService.getVimeoBanner(
      id,
      this.thumbQuality
    );

    this._videoUrl = this.__ngxService.getVimeoVideoUrl(id);
  }
  /**
   * Lazy image quality
   * @type ThumbSize
   * @default 'high'
   */
  @Input() thumbQuality: ThumbSize = 'high';
  /**
   *
   */
  @Input() showTitle: boolean = false;
  //#endregion

  constructor(private __ngxService: NgxLiteVideoGeneralService) { }


}
