import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { ThumbSize, VideoMode, VimeoVideo } from '../../models';
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
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxLiteVimeoComponent implements OnInit {
  _showIframe: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  _bannerSrc: Subject<string> = new Subject();
  _videoUrl!: SafeUrl;
  _vimeoBanner$!:Observable<any>
  @Input() videoId!: string;
  // @Input() videoTitle!: string;
  @Input() thumbQuality: ThumbSize = 'high';
  @Input() showTitle: boolean = false;

  constructor(private __ngxService: NgxLiteVideoGeneralService) { }

  ngOnInit(): void {
   this._vimeoBanner$= this.__ngxService.getVimeoBanner(this.videoId, this.thumbQuality);
   this._videoUrl=this.__ngxService.getVimeoVideoUrl(this.videoId)
  }
}
