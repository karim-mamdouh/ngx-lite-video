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

### Vimeo Attributes

| Property     | Type                           | Default   | Description                                                                                                                                 |
| ------------ | ------------------------------ | --------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| videoId      | string                         | undefined | Video ID to be viewed                                                                                                                       |
| thumbQuality | 'low', 'medium', 'high', 'max' | high      | Lazy image quality                                                                                                                          |
| showTitle    | boolean                        | false     | Enables/disables showing title in lazy mode                                                                                                 |
| hasControls  | boolean                        | false     | Shows/hides video controls in iframe                                                                                                        |
| loop         | boolean                        | false     | Enables video looping                                                                                                                       |
| isBackground | boolean                        | false     | Enables vimeo background mode, please refer to [https://developer.vimeo.com/player/sdk/embed](https://developer.vimeo.com/player/sdk/embed) |
