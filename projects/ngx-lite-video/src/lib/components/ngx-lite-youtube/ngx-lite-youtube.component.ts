import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafeUrl } from '@angular/platform-browser';
import { BehaviorSubject } from 'rxjs';
import { ThumbSize, VideoMode } from '../../models';
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

  @Input() videoId!: string;
  @Input() videoTitle!: string;
  @Input() thumbQuality: ThumbSize = 'high';
  @Input() mode: VideoMode = 'youtube';
  @Input() hasControls: boolean = true;
  //#endregion

  constructor(private __ngxService: NgxLiteVideoGeneralService) {}

  //#region Life Cycle Hooks
  ngOnInit(): void {
    this._bannerSrc = `url(${this.__ngxService.getVideoBanner(
      this.videoId,
      this.mode,
      this.thumbQuality
    )})`;

    this._videoUrl = this.__ngxService.getVideoUrl(this.videoId);
    console.log(this._videoUrl);
  }
  //#endregion
}
