import { useContext, useEffect } from 'react';
import { useRouter } from 'next/navigation'

import { PodcastsContext } from '../../contexts/PodcastsProvider';
import { PodcastDetailContext } from '../../contexts/PodcastDetailProvider';
import SCREENS from '../../constants/screens';

import './index.css';

type PodcastDetailScreenProps = {
  children: React.ReactNode;
  id: string;
};

const PodcastDetailScreen: React.FC<PodcastDetailScreenProps> = ({ children, id }) => {
  const { push } = useRouter();

  const { isLoading: arePodcastsLoading, podcasts } = useContext(PodcastsContext);
  const { isLoading: isDetailLoading, podcastDetail, setPodcastId } = useContext(PodcastDetailContext);
  const selectedPodcast = podcasts.find(podcast => podcast.id.attributes['im:id'] === id);

  useEffect(() => {
    setPodcastId(id ?? '');
  }, [id]);

  const onPodcastDetailClickHandler = () => {
    push(SCREENS.PODCAST_DETAIL.PATH_BUILDER(id ?? ''));
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
      {children}
    </div>

  );
}

export default PodcastDetailScreen;
