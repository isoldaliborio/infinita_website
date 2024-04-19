import React from 'react';
import styles from "./VideoEmbed.module.scss"

export interface VideoProps {
  // src: string;
  type: "youtube" | "vimeo";
  videoUrl: string;
}

const VideoEmbed: React.FC<VideoProps> = ({ type, videoUrl }) => {
  const getVideoIdFromUrl = (url: string) => {
    const urlParts = url.split('/');
    return urlParts[urlParts.length - 1];
  };

  const getEmbedUrl = () => {
    const videoId = getVideoIdFromUrl(videoUrl);
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
        src={getEmbedUrl()}
        title={`${type} video player`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoEmbed;
