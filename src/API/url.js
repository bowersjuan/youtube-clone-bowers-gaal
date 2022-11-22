const BASE_URL = "https://youtube.googleapis.com/youtube/v3/search?";
const urlSnippet = `part=snippet`;
const urlTypeVideo = `type=video&q=`;
const urlKey = `key=${process.env.REACT_APP_YOUTUBE_API}`;

export { BASE_URL, urlSnippet, urlTypeVideo, urlKey };
