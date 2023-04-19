import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  OnInit,
} from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';
import { BehaviorSubject } from 'rxjs';
import { ThumbSize } from '../../models';
import { NgxLiteVideoGeneralService } from '../../services/ngx-lite-video-general-service.service';

@Component({
  selector: 'ngx-lite-youtube',
  templateUrl: './ngx-lite-youtube.component.html',
  styleUrls: ['./ngx-lite-youtube.component.scss'],
  providers: [NgxLiteVideoGeneralService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgxLiteYoutubeComponent implements OnInit, OnChanges {
  //#region Declerations
  _showIframe$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
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
  /**
   * External styling class
   * @type string
   */
  @Input() styleClass!: string;
  //#endregion

  constructor(private __ngxService: NgxLiteVideoGeneralService) {}

  //#region Life Cycle Hooks
  ngOnInit(): void {
    this.init();
  }

  ngOnChanges(): void {
    this.init();
    this._showIframe$.next(false);
  }
  //#endregion

  //#region Methods
  // This method initializes the component by setting the `_bannerSrc` and `_videoUrl` properties based on the value of `this.videoId`.
  init(): void {
    // Call the `hasNoVideoId()` method from the injected `__ngxService` service with the current value of `this.videoId` as its argument,
    // which checks if `this.videoId` is defined and throws an error in case it isn't.
    this.__ngxService.hasNoVideoId(this.videoId);

    // Set the `_bannerSrc` variable to a string that consists of a 'url()' CSS function with the result of calling the `getYouTubeBanner()` method
    // from the injected `__ngxService` service as its argument. The `getYouTubeBanner()` method returns the URL of a YouTube video's banner image
    // based on the given `this.videoId` and thumbnail quality (`this.thumbQuality`).
    this._bannerSrc = `url(${this.__ngxService.getYouTubeBanner(
      this.videoId,
      this.thumbQuality
    )})`;

    // Set the `_videoUrl` variable to the result of calling the `getYouTubeUrl()` method from the injected `__ngxService` service,
    // passing it the current `this.videoId` value as the first argument, and several boolean flags (`this.hasControls`, `this.allowFullScreen`,
    // `this.loop`, `this.start`, `this.end`) as the remaining arguments. The `getYouTubeUrl()` method creates a URL for a YouTube video
    // using embed codes and modifying the URL based on the supplied boolean values. The resulting URL is saved in the `_videoUrl` variable.
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
