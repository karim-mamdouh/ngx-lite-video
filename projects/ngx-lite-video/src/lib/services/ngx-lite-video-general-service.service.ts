import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import {
  ThumbSize,
  VimeoVideo,
  VideoQualities,
  VimeoLazyData,
} from '../models';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable()
export class NgxLiteVideoGeneralService {
  //#region Declerations
  private readonly __youtubeSizes: VideoQualities = {
    low: 'sddefault',
    medium: 'mqdefault',
    high: 'hqdefault',
    max: 'maxresdefault',
  };
  private readonly __thumbHelper: VideoQualities = {
    max: 'thumbnail_large',
    high: 'thumbnail_large',
    medium: 'thumbnail_medium',
    low: 'thumbnail_small',
  };
  //#endregion

  constructor(
    private __domSanitizer: DomSanitizer,
    private __http: HttpClient
  ) {}

  //#region Methods
  getYouTubeBanner(videoId: string, quality: ThumbSize): string {
    return `http://img.youtube.com/vi/${videoId}/${this.__youtubeSizes[quality]}.jpg`;
  }

  getYouTubeUrl(
    videoId: string,
    hasControls: boolean,
    allowFullScreen: boolean,
    loop: boolean,
    start: number,
    end: number
  ): SafeUrl {
    return this.__domSanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&controls=${
        hasControls ? '1' : '0'
      }${loop ? '&playlist=' + videoId + '&loop=1' : ''}${
        start ? '&start=' + start : ''
      }${end ? '&end=' + end : ''}${allowFullScreen ? '&fs=1' : '&fs=0'}`
    );
  }

  getVimeoVideoUrl(videoId: string): SafeUrl {
    return this.__domSanitizer.bypassSecurityTrustResourceUrl(
      `https://player.vimeo.com/video/${videoId}?autoplay=1`
    );
  }

  getVimeoBanner(
    videoId: string,
    quality: ThumbSize
  ): Observable<VimeoLazyData> {
    return this.__http
      .get<VimeoVideo[]>(`http://vimeo.com/api/v2/video/${videoId}.json`)
      .pipe(
        map((data: any) => ({
          bannerSrc: `url(${data[0][this.__thumbHelper[quality]]})`,
          title: data[0].title,
        }))
      );
  }

  hasNoVideoId(videoId: string): void {
    if (!videoId) {
      throw new Error('Video ID MUST be provided');
    }
  }
  //#endregion
}
