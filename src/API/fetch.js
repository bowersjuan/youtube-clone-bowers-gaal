const BASE_URL = "https://youtube.googleapis.com/youtube/v3/search";

const get = async (params) => {
  const response = await fetch(
    BASE_URL +
      "?" +
      new URLSearchParams({
        ...params,
        part: "snippet",
        type: "video",
      }) +
      `&key=${process.env.REACT_APP_YOUTUBE_API}`
  );
  const data = await response.json();
  return data;
};

export { get };
