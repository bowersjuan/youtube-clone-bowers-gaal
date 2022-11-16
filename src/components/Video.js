import { useParams } from "react-router-dom";
import YouTube, { YouTubeProps } from "react-youtube";

const Video = ({ videos, video }) => {
  const { id } = useParams();

  return (
    <div>
      <YouTube key={video.id.videoId} videoId={video.id.videoId} />
    </div>
  );
};

export default Video;
