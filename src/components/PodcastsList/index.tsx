'use client';

import { useRouter } from 'next/navigation'
import PodcastCard from '../PodcastCard';
import { Podcast } from "src/constants/types";
import './index.css';
import SCREENS from "../../constants/screens";

const useFilteredPodcasts = (podcasts: Podcast[], filter: string) =>
  podcasts.filter((podcast) => 
    podcast['im:name'].label.toLowerCase().includes(filter.toLowerCase()) ||
    podcast['im:artist'].label.toLowerCase().includes(filter.toLowerCase())
  );

type PodcastListPropsType = {
  podcasts: Podcast[];
  filter: string;
  PodcastComponent?:
    React.FC<{podcast: Podcast, onPodcastClick: (id: string) => void}>;
};

const PodcastList: React.FC<PodcastListPropsType> = ({
  podcasts,
  filter = '',
  PodcastComponent = PodcastCard
}) => {
  const { push } = useRouter();

  const onPodcastClickHandler = (id: string) => {
    push(SCREENS.PODCAST_DETAIL.PATH_BUILDER(id));
  };

  const filteredPodcasts = useFilteredPodcasts(podcasts, filter);

  return (
    <div id='podcasts-list-container'>
      {filteredPodcasts.map((podcast) =>
        <PodcastComponent
          key={podcast.id.attributes['im:id']}
          podcast={podcast}
          onPodcastClick={onPodcastClickHandler}
        />
      )}
    </div>
  );
};

export default PodcastList;
