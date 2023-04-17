import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ThumbSize, VimeoVideo, YouTubeQualities } from '../models';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, map } from 'rxjs';
@Injectable()
export class NgxLiteVideoGeneralService {
  //#region Declerations
  private __youtubeSizes: YouTubeQualities = {
    low: 'sddefault',
    medium: 'mqdefault',
    high: 'hqdefault',
    max: 'maxresdefault',
  };
  //#endregion

  constructor(private __domSanitizer: DomSanitizer, private http: HttpClient) { }

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

  getVimeoVideoUrl(videoId: string):SafeUrl{
    return this.__domSanitizer.bypassSecurityTrustResourceUrl(
      `https://player.vimeo.com/video/${videoId}?autoplay=1`
    );
  }
  getVimeoBanner(videoId: string, quality: ThumbSize): Observable<VimeoVideo> {
    return this.http.get(`http://vimeo.com/api/v2/video/${videoId}.json`).pipe(map((data: any) => data[0]))
  }
}
