import { useNavigate } from "react-router-dom";
import PodcastCard from '../PodcastCard';
import { Podcast } from "../../constants/types";
import './index.css';

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
  const navigate = useNavigate();

  const onPodcastClickHandler = (id?: string) => {
    navigate(`/podcast/${id}`);
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
