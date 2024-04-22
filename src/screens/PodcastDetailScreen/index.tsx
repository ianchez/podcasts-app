import { useContext, useEffect } from 'react';
import { useRouter } from 'next/navigation';

import { PodcastsContext } from '../../contexts/PodcastsProvider';
import { PodcastDetailContext } from '../../contexts/PodcastDetailProvider';
import PodcastSideBar from 'src/components/PodcastSideBar';
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

  return (
    <div className='row screen spaced'>
      <PodcastSideBar
        podcastDetail={podcastDetail}
        selectedPodcast={selectedPodcast}
        onSideBarClick={onPodcastDetailClickHandler}
      />
      {children}
    </div>

  );
}

export default PodcastDetailScreen;
