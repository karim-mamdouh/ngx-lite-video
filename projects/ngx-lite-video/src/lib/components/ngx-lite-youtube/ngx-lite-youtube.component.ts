import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafeUrl } from '@angular/platform-browser';
import { BehaviorSubject } from 'rxjs';
import { ThumbSize } from '../../models';
import { NgxLiteVideoGeneralService } from '../../services/ngx-lite-video-general-service.service';

@Component({
  selector: 'ngx-lite-youtube',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ngx-lite-youtube.component.html',
  styleUrls: ['./ngx-lite-youtube.component.scss'],
  providers: [NgxLiteVideoGeneralService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgxLiteYoutubeComponent implements OnInit {
  //#region Declerations
  _showIframe: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  _bannerSrc!: string;
  _videoUrl!: SafeUrl;

  /**
   * Video ID to be viewed
   * @type string
   * @Required true
   */
  @Input() videoId!: string;
  /**
   * Title to be displayed in lazy mode
   * @type string
   */
  @Input() videoTitle!: string;
  /**
   * Lazy image quality
   * @type ThumbSize
   * @default 'high'
   */
  @Input() thumbQuality: ThumbSize = 'high';
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
   * Sets starting video time (in seconds)
   * @type number
   */
  @Input() start!: number;
  /**
   * Enables/disables fullscreen button in iframe
   * @type boolean
   * @default true
   */
  @Input() allowFullScreen: boolean = true;
  /**
   * Sets ending video time (in seconds)
   * @type number
   */
  @Input() end!: number;
  //#endregion

  constructor(private __ngxService: NgxLiteVideoGeneralService) {}

  //#region Life Cycle Hooks
  ngOnInit(): void {
    this._bannerSrc = `url(${this.__ngxService.getYouTubeBanner(
      this.videoId,
      this.thumbQuality
    )})`;

    this._videoUrl = this.__ngxService.getYouTubeUrl(
      this.videoId,
      this.hasControls,
      this.allowFullScreen,
      this.loop,
      this.start,
      this.end
    );
  }
  //#endregion
}
