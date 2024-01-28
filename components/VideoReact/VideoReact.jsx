import React from "react";
import ReactPlayer from "react-player/lazy";

const VideoReact = ({ url }) => {
  return (
    <ReactPlayer
      url={url}
      width="100%"
      controls="true"
      playsinline="true"
      loop="true"
      playing="true"
      muted="true"
      suppressHydrationWarning
    />
  );
};

export default VideoReact;
