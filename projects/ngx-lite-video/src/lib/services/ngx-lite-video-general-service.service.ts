import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ThumbSize, VideoMode, VimeoVideo } from '../models';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, map } from 'rxjs';
@Injectable()
export class NgxLiteVideoGeneralService {
  private __youtubeSizes: any = {
    low: 'sddefault',
    medium: 'mqdefault',
    high: 'hqdefault',
  };

  constructor(private __domSanitizer: DomSanitizer, private http: HttpClient) { }

  getVideoBanner(videoId: string, mode: VideoMode, quality: ThumbSize): string {
    let url = '';
    if (mode === 'vimeo') {
    } else {
      url = `http://img.youtube.com/vi/${videoId}/${this.__youtubeSizes[quality]}.jpg`;
    }
    return url;
  }

  getVideoUrl(videoId: string): SafeUrl {
    return this.__domSanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`
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
