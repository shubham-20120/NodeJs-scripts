const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
const ffmpeg = require('fluent-ffmpeg');
ffmpeg.setFfmpegPath(ffmpegPath);
try {
    ffmpeg({ source: 'C:/Users/dhaval/Desktop/ToC/intro.mp4' })
        .takeScreenshots({
            filename: 'photo.jpg',
            timemarks: [50]
        }, './');
} catch (e) {
    console.log('error handling');
    console.log(e);
}