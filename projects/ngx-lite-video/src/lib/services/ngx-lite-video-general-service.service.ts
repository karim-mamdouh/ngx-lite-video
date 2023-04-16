import { ThumbSize, VideoMode } from '../models';

export class NgxLiteVideoGeneralService {
  private __youtubeSizes: any = {
    small: 'sddefault',
    medium: 'mqdefault',
    large: 'hqdefault',
  };

  constructor() {}

  getVideoBanner(videoId: string, mode: VideoMode, size: ThumbSize): string {
    let url = '';
    console.log(mode);
    if (mode === 'vimeo') {
    } else {
      url = `http://img.youtube.com/vi/${videoId}/${this.__youtubeSizes[size]}.jpg`;
    }
    return url;
  }
}
