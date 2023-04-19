# ngx-lite-video

ngx-lite-video is an Angular package that provides lazy loading capabilities for embedded iframes from popular video sharing platforms like YouTube and Vimeo. The package is designed to optimize the loading of embedded videos, improving page load times and reducing data usage.

The package is built specifically for Angular, utilizing Angular's onpush change detection strategy for efficient rendering and updating of video components. It also includes features such as customizable lazy loading thresholds and options for controlling video playback and display.

This package requires a minimum of Angular version 13 and rxjs version 7.2 to function properly.

Try it yourself by measuring the performance on [Demo](https://karim-mamdouh.github.io/ngx-lite-video/) page

## Key Features

- Lazy loads embedded iframes for YouTube and Vimeo videos
- Built specifically for Angular
- Uses Angular OnPush change detection for optimized performance
- Customizable options including video quality, start time, and more
- Provides a seamless user experience by loading videos only when needed

<br/>

## Install

```shell
npm install ngx-lite-video --save
```

Once installed, import the module that you wish to use in your desired module

```javascript
@NgModule({
  //...
  imports: [
    //...
    NgxLiteVimeoModule, // Vimeo lite module
    NgxLiteYoutubeModule, // YouTube lite module
  ],
})
export class YourModule {}
```

<br/>

## Usage

To use ngx-lite-video, add the 'ngx-lite-youtube'/'ngx-lite-vimeo' component to your template and configure its properties as needed:

```html
<!-- YouTube Component -->
<ngx-lite-youtube videoId="Ys7xdebd66Y"></ngx-lite-youtube>

<!-- Vimeo Component -->
<ngx-lite-vimeo videoId="786570322"></ngx-lite-vimeo>
```

### Custom styles

To override styling create a class in global style.scss file & provide it to styleClass attribute

For more detailed examples see [Demo](https://karim-mamdouh.github.io/ngx-lite-video/) page

<br/>

## API

### YouTube Attributes

| Property        | Type    | Default   | Description                                  |
| --------------- | ------- | --------- | -------------------------------------------- |
| videoId         | string  | undefined | Video ID to be viewed                        |
| videoTitle      | string  | undefined | Title to be displayed in lazy mode           |
| hasControls     | boolean | false     | Shows/hides video controls in iframe         |
| loop            | boolean | false     | Enables video looping                        |
| allowFullScreen | boolean | true      | Enables/disables fullscreen button in iframe |
| start           | number  | undefined | Sets starting video time (in seconds)        |
| end             | number  | undefined | Sets ending video time (in seconds)          |
| styleClass      | string  | undefined | External styling class                       |

<br/>

### Vimeo Attributes

| Property     | Type                           | Default   | Description                                                                                                                                 |
| ------------ | ------------------------------ | --------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| videoId      | string                         | undefined | Video ID to be viewed                                                                                                                       |
| thumbQuality | 'low', 'medium', 'high', 'max' | high      | Lazy image quality                                                                                                                          |
| showTitle    | boolean                        | false     | Enables/disables showing title in lazy mode                                                                                                 |
| hasControls  | boolean                        | false     | Shows/hides video controls in iframe                                                                                                        |
| loop         | boolean                        | false     | Enables video looping                                                                                                                       |
| isBackground | boolean                        | false     | Enables vimeo background mode, please refer to [https://developer.vimeo.com/player/sdk/embed](https://developer.vimeo.com/player/sdk/embed) |
| styleClass   | string                         | undefined | External styling class                                                                                                                      |

<br/>

## Contributing

Contributions are welcome. You can start by creating new Issue with proposal or bug report.

<br/>

## License

ngx-lite-video is an open source package released under the MIT license. See the LICENSE file for more information.
