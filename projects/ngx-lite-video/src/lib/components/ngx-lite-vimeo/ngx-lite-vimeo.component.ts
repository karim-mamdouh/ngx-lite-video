import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
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
export class NgxLiteVimeoComponent implements OnInit {
  //#region Declerations
  _showIframe$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  _videoUrl!: SafeUrl;
  _vimeoBanner$!: Observable<any>;

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
   *
   */
  @Input() showTitle: boolean = false;
  //#endregion

  constructor(private __ngxService: NgxLiteVideoGeneralService) {}

  //#region Life Cycle Hooks
  ngOnInit(): void {
    this.__ngxService.hasNoVideoId(this.videoId);

    this._vimeoBanner$ = this.__ngxService.getVimeoBanner(
      this.videoId,
      this.thumbQuality
    );

    this._videoUrl = this.__ngxService.getVimeoVideoUrl(this.videoId);
  }
  //#endregion
}
