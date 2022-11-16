import { useParams } from "react-router-dom";
import YouTube from "react-youtube";

const Video = ({ videos }) => {
  const { id } = useParams();

  const video = videos.items.find((vid) => {
    return vid.id.videoId === id;
  });

  return <YouTube videoId={video.id.videoId} />;
};

export default Video;
