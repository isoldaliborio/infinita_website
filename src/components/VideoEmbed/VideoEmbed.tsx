import React from 'react';
import styles from "./VideoEmbed.module.scss"

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
    <div className={styles.videoResponsive}>
      <iframe
        className={styles.embeddedVideo}
        width="1000" //THIS IS OVERRIDDEN IN SCSS FILE
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
