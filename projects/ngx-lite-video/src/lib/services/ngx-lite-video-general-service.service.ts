import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ThumbSize, VideoMode } from '../models';
import { Injectable } from '@angular/core';

@Injectable()
export class NgxLiteVideoGeneralService {
  private __youtubeSizes: any = {
    low: 'sddefault',
    medium: 'mqdefault',
    high: 'hqdefault',
  };

  constructor(private __domSanitizer: DomSanitizer) {}

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
}
