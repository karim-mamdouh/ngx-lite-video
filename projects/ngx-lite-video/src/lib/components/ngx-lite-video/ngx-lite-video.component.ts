import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThumbSize, VideoMode } from '../../models';
import { NgxLiteVimeoComponent, NgxLiteYoutubeComponent } from '..';
import { BehaviorSubject } from 'rxjs';
import { NgxLiteVideoGeneralService } from '../../services/ngx-lite-video-general-service.service';

@Component({
  selector: 'ngx-lite-video',
  standalone: true,
  imports: [CommonModule, NgxLiteVimeoComponent, NgxLiteYoutubeComponent],
  providers: [NgxLiteVideoGeneralService],
  templateUrl: './ngx-lite-video.component.html',
  styleUrls: ['./ngx-lite-video.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgxLiteVideoComponent implements OnInit {
  _showIframe: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  _bannerSrc!: string;

  @Input() videoId!: string;
  @Input() videoTitle!: string;
  @Input() thumbSize: ThumbSize = 'large';
  @Input() mode: VideoMode = 'youtube';

  constructor(private __ngxService: NgxLiteVideoGeneralService) {}

  ngOnInit(): void {
    this._bannerSrc = this.__ngxService.getVideoBanner(
      this.videoId,
      this.mode,
      this.thumbSize
    );
  }
}
