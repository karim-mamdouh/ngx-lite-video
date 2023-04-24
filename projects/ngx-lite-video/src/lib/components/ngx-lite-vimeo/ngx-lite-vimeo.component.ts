import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  OnChanges,
} from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ThumbSize, VimeoLazyData } from '../../models';
import { NgxLiteVideoGeneralService } from '../../services/ngx-lite-video-general-service.service';
import { SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'ngx-lite-vimeo',
  templateUrl: './ngx-lite-vimeo.component.html',
  styleUrls: ['./ngx-lite-vimeo.component.scss'],
  providers: [NgxLiteVideoGeneralService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgxLiteVimeoComponent implements OnInit, OnChanges {
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
  // This method initializes the component by setting the '_vimeoBanner$'and '_videoUrl' properties based on the value of 'this.videoId'.
  init(): void {
    // Call the 'hasNoVideoId' method from the injected '__ngxService' service with the current value of 'this.videoId' as its argument,
    // which checks if 'this.videoId' is defined and throws an error in case it isn't.
    this.__ngxService.hasNoVideoId(this.videoId);

    // Set the '_vimeoBanner$' variable to the result of calling the 'getVimeoBanner()' method from the injected '__ngxService' service
    // passing it the current 'this.videoId' value and thumbnail quality ('this.thumbQuality') as its arguments. The 'getVimeoBanner()' method
    // returns an observable that emits the URL of a Vimeo video's banner image based on the given 'this.videoId' and thumbnail quality.
    this._vimeoBanner$ = this.__ngxService.getVimeoBanner(
      this.videoId,
      this.thumbQuality
    );

    // Set the '_videoUrl' variable to the result of calling the 'getVimeoVideoUrl()' method from the injected '__ngxService' service,
    // passing it the current 'this.videoId' value as its first argument, and several boolean flags ('this.hasControls', 'this.loop',
    // 'this.isBackground') as its remaining arguments. The 'getVimeoVideoUrl()' method creates a URL for a Vimeo video using
    // embed codes and modifying it based on the supplied boolean values. The resulting URL is saved in the '_videoUrl' variable.
    this._videoUrl = this.__ngxService.getVimeoVideoUrl(
      this.videoId,
      this.hasControls,
      this.loop,
      this.isBackground
    );
  }
  //#endregion
}
