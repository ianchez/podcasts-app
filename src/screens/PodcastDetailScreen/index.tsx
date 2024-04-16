import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { PodcastsContext } from '../../contexts/podcasts';

const PodcastDetailScreen = () => {
  const { id } = useParams();
  const { podcastDetail, setPodcastId } = useContext(PodcastsContext);
  console.log({podcastDetail});

  useEffect(() => {
    setPodcastId(id ?? '');
  }, [id]);

  return (
    <div>
      <h1>Podcast: {id} - Detail Screen</h1>
    </div>
  );
}

export default PodcastDetailScreen
