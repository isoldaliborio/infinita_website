import React from 'react';

export interface VideoProps {
  // src: string;
  type: "youtube" | "vimeo";
  videoId: string;
}

const VideoEmbed: React.FC<VideoProps> = ({ type, videoId, src }) => {
  const getEmbedUrl = () => {
    switch (type) {
      case "youtube":
        return `https://www.youtube.com/embed/${videoId}`;
      case "vimeo":
        return `https://player.vimeo.com/video/${videoId}`;
      default:
        return '';
    }
  };

  return (
    <div className="video-responsive">
      <iframe
        width="560"
        height="315"
        src={getEmbedUrl()}
        title={`${type} video player`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoEmbed;
