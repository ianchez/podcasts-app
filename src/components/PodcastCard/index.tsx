import { Podcast } from '../../constants/types';
import Image from 'next/image';

import './index.css';

type PodcastCardPropsType = {
  podcast: Podcast;
  onPodcastClick: (id: string) => void;
};

const PodcastCard: React.FC<PodcastCardPropsType> = ({ podcast, onPodcastClick }) => {
  const onPodcastClickHandler = () => {
    const id = podcast.id.attributes['im:id'] || '';
    onPodcastClick(id);
  };

  return (
    <div className="podcast-item">
      <span className="transparent" />
      <div className="pressable shifted-container" onClick={onPodcastClickHandler}>
        <div className="image-container">
          <Image
            fill
            src={podcast['im:image'][2].label}
            alt={podcast['im:name'].label}
            quality={100}
            sizes="170px"
          />
        </div>
        <h5>{podcast['im:name'].label}</h5>
        <p>Author: {podcast['im:artist'].label}</p>
      </div>
    </div>
  );
};

export const PodcastCardSkeleton: React.FC<{}> = () => (
  <div className="podcast-item skeleton">
    <span className="transparent" />
    <div className="shifted-container">
      <div className="image-container">
        <div className="image" />
      </div>
      <h5>...</h5>
      <p>...</p>
    </div>
  </div>
);

export default PodcastCard;
