import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import {
  ThumbSize,
  VimeoVideo,
  VideoQualities,
  VimeoLazyData,
} from '../models';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';

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
  // This function returns the URL of a YouTube video thumbnail image of a specific size
  // Parameters:
  //   - videoId: string representing a YouTube video ID
  //   - quality: ThumbSize enum value representing the desired thumbnail size
  // Returns:
  //   - A string representing the URL of the thumbnail image
  getYouTubeBanner(videoId: string, quality: ThumbSize): string {
    // Return the URL using string interpolation with the given videoId and quality size
    // YouTube uses a specific format for their thumbnail URLs, hence the use of `http://img.youtube.com/vi/<videoId>/<size>.jpg`
    return `http://img.youtube.com/vi/${videoId}/${this.__youtubeSizes[quality]}.jpg`;
  }
  // This function returns a sanitized YouTube video URL with specified parameters
  // Parameters:
  //   - videoId: string representing a YouTube video ID
  //   - hasControls: boolean that determines whether or not to display controls on the embedded video player
  //   - allowFullScreen: boolean that determines whether or not to allow fullscreen mode on the embedded video player
  //   - loop: boolean that determines whether or not to loop the video
  //   - start: number that represents the starting time of the video (in seconds)
  //   - end: number that represents the ending time of the video (in seconds)
  // Returns:
  //   - A SafeUrl object representing the sanitized YouTube video URL
  getYouTubeUrl(
    videoId: string,
    hasControls: boolean,
    allowFullScreen: boolean,
    loop: boolean,
    start: number,
    end: number
  ): SafeUrl {
    // Sanitize the URL using the Angular DomSanitizer service, since we're embedding it in our DOM
    return this.__domSanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&controls=${
        hasControls ? '1' : '0'
      }${loop ? '&playlist=' + videoId + '&loop=1' : ''}${
        start ? '&start=' + start : ''
      }${end ? '&end=' + end : ''}${allowFullScreen ? '&fs=1' : '&fs=0'}`
    );
  }
  // This function returns a Vimeo video URL with specified parameters
  // Parameters:
  //   - videoId: string representing a Vimeo video ID
  //   - hasControls: boolean that determines whether or not to display controls on the embedded video player
  //   - loop: boolean that determines whether or not to loop the video
  //   - isBackground: boolean that determines whether or not the video is being used as a background
  // Returns:
  //   - A SafeUrl object representing the Vimeo video URL
  getVimeoVideoUrl(
    videoId: string,
    hasControls: boolean,
    loop: boolean,
    isBackground: boolean
  ): SafeUrl {
    // Sanitize the URL using the Angular DomSanitizer service, since we're embedding it in our DOM
    return this.__domSanitizer.bypassSecurityTrustResourceUrl(
      `https://player.vimeo.com/video/${videoId}?autoplay=1${
        hasControls ? '&controls=true' : '&controls=false'
      }${loop ? '&loop=true' : ''}${isBackground ? '&background=true' : ''}`
    );
  }
  // This function returns a banner representing the Vimeo video with the specified ID
  // Parameters:
  //   - videoId: string representing a Vimeo video ID
  //   - quality: an enum type ThumbSize that determines the size of the thumbnail image to be used
  // Returns:
  //   - An Observable object containing an object with the banner source and title for the Vimeo video
  getVimeoBanner(
    videoId: string,
    quality: ThumbSize
  ): Observable<VimeoLazyData> {
    // Get data about the Vimeo video from the Vimeo API using Angular's HttpClient service
    return this.__http
      .get<VimeoVideo[]>(`https://vimeo.com/api/v2/video/${videoId}.json`)
      .pipe(
        map((data: any) => ({
          bannerSrc: `url(${data[0][this.__thumbHelper[quality]]})`,
          title: data[0].title,
        })),
        catchError(() => {
          return of({
            bannerSrc: '',
            title: '',
          });
        })
      );
  }
  // This function checks if a video ID is provided or not
  // Parameters:
  //   - videoId: a string representing a Vimeo video ID
  // Returns:
  //   - void (nothing)
  hasNoVideoId(videoId: string): void {
    // If videoId is falsy (i.e., empty, undefined or null), throw an error indicating that videoId must be provided
    if (!videoId) {
      throw new Error('Video ID MUST be provided');
    }
  }
  //#endregion
}
