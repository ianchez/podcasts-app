import { useContext, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation'

import { PodcastsContext } from '../../contexts/PodcastsProvider';
import { PodcastDetailContext } from '../../contexts/PodcastDetailProvider';
import './index.css';

const PodcastDetailScreen: React.FC<{}> = () => {
  const { push } = useRouter();

  const { id } = useParams<{ id: string }>();
  const { isLoading: arePodcastsLoading, podcasts } = useContext(PodcastsContext);
  const { isLoading: isDetailLoading, podcastDetail, setPodcastId } = useContext(PodcastDetailContext);
  const selectedPodcast = podcasts.find(podcast => podcast.id.attributes['im:id'] === id);

  useEffect(() => {
    setPodcastId(id ?? '');
  }, [id]);

  const onPodcastDetailClickHandler = () => {
    push(`/podcast/${id}`);
  };

  // Error handling
  if (arePodcastsLoading || isDetailLoading) return <div className='screen'><h4>Loading...</h4></div>;
  if (!podcastDetail || !selectedPodcast) {
    return <div className='screen'><h4>Podcast Not Found</h4></div>;
  }

  const sideBar = (
    <div id='side-bar-container'>
      <img
        className='pressable'
        role='button'
        onClick={onPodcastDetailClickHandler}
        src={podcastDetail.artworkUrl600} 
        alt={podcastDetail.collectionName}
      />

      <hr />

      <h6
        className='pressable'
        role='button'
        onClick={onPodcastDetailClickHandler}
      >
        {podcastDetail.collectionName}
      </h6>
      <p><i>By {podcastDetail.artistName}</i></p>

      <hr />

      <h6 id='description'>Description:</h6>
      <p><i>{selectedPodcast.summary.label}</i></p>
    </div>
  );

  return (
    <div className='row screen spaced'>
      {sideBar}
      {/* TODO: replace with children when transforming into layout component */}
      {/* <Outlet /> */}
    </div>

  );
}

export default PodcastDetailScreen;
