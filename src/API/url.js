const BASE_URL = "https://youtube.googleapis.com/youtube/v3/search?";
const reactDevYoutubeAPI = process.env.REACT_APP_YOUTUBE_API;
const queryParam1 = `part=snippet`;
const queryParam2 = `key=${reactDevYoutubeAPI}`;
const queryParam3 = `type=video&q=`;

export {
  BASE_URL,
  reactDevYoutubeAPI,
  queryParam1,
  queryParam2,
  queryParam3,
  //   queryParam4,
};
