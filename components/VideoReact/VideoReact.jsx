import React from "react";
import ReactPlayer from "react-player/lazy";

const VideoReact = ({ url, placeholderImg }) => {
  return (
    <ReactPlayer
      url={url}
      width="100%"
      controls="true"
      loop="true"
      playing="true"
      muted="true"
      suppressHydrationWarning
playsInline
light={placeholderImg}
    />
  );
};

export default VideoReact;
