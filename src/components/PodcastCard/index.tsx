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
        <Image src={podcast['im:image'][2].label} alt={podcast['im:name'].label} />
        <h5>{podcast['im:name'].label}</h5>
        <p>Author: {podcast['im:artist'].label}</p>
      </div>
    </div>
  );
};

export default PodcastCard;
