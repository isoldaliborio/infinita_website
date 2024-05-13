import React from 'react';
import styles from "./VideoEmbed.module.scss"

export interface VideoProps {
  // src: string;
  type: "youtube" | "vimeo";
  videoUrl: string;
}

const VideoEmbed: React.FC<VideoProps> = ({ type, videoUrl }) => {

  const getVideoIdFromUrl = (url: string) => {
    let videoId = '';
    if (type === 'youtube') {
      const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&\n?#]+)/);
      if (match) {
        videoId = match[1];
      }
    } else if (type === 'vimeo') {
      const urlParts = url.split('/');
      videoId = urlParts[urlParts.length - 1];
    }
    return videoId;
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
