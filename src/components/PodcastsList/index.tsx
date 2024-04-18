import PodcastCard from '../PodcastCard';
import { Podcast } from "../../constants/types";

import './index.css';

type PodcastListPropsType = {
  podcasts: Podcast[];
  filter: string;
};

const PodcastList: React.FC<PodcastListPropsType> = ({
  podcasts,
  filter = ''
}) => {
  const filteredPodcasts = podcasts?.filter((podcast) => 
    podcast['im:name'].label.toLowerCase().includes(filter.toLowerCase()) ||
    podcast['im:artist'].label.toLowerCase().includes(filter.toLowerCase())
  ) || [];

  return (
    <div id='podcasts-list-container'>
      {filteredPodcasts.map((podcast) =>
        <PodcastCard key={podcast.id.attributes['im:id']} podcast={podcast} />
      )}
    </div>
  );
};

export default PodcastList;
