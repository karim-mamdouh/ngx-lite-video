import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { BehaviorSubject, Observable } from 'rxjs';
import { ThumbSize, VimeoLazyData } from '../../models';
import { NgxLiteVideoGeneralService } from '../../services/ngx-lite-video-general-service.service';
import { SafeUrl } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'ngx-lite-vimeo',
  templateUrl: './ngx-lite-vimeo.component.html',
  styleUrls: ['./ngx-lite-vimeo.component.scss'],
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  providers: [NgxLiteVideoGeneralService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgxLiteVimeoComponent implements OnInit {
  //#region Declerations
  _showIframe$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  _videoUrl!: SafeUrl;
  _vimeoBanner$!: Observable<VimeoLazyData>;

  /**
   * Video ID to be viewed
   * @type string
   * @Required true
   */
  @Input() videoId!: string;
  /**
   * Lazy image quality
   * @type ThumbSize
   * @default 'high'
   */
  @Input() thumbQuality: ThumbSize = 'high';
  /**
   * Enables/disables showing title in lazy mode
   * @type boolean
   * @default false
   */
  @Input() showTitle: boolean = false;
  /**
   * Shows/hides video controls in iframe
   * @type boolean
   * @default true
   */
  @Input() hasControls: boolean = true;
  /**
   * Enables video looping
   * @type boolean
   * @default false
   */
  @Input() loop: boolean = false;
  /**
   * Enables vimeo background mode, please refer to (https://developer.vimeo.com/player/sdk/embed)
   * @type boolean
   * @default false
   */
  @Input() isBackground: boolean = false;
  //#endregion

  constructor(private __ngxService: NgxLiteVideoGeneralService) {}

  //#region Life Cycle Hooks
  ngOnInit(): void {
    this.__ngxService.hasNoVideoId(this.videoId);

    this._vimeoBanner$ = this.__ngxService.getVimeoBanner(
      this.videoId,
      this.thumbQuality
    );

    this._videoUrl = this.__ngxService.getVimeoVideoUrl(
      this.videoId,
      this.hasControls,
      this.loop,
      this.isBackground
    );
  }
  //#endregion
}
