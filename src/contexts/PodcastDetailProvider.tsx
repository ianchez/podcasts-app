import { createContext, useEffect, useState } from 'react';
import usePodcastDetailById from '../hooks/usePodcastDetailById';
import { Episode, PodcastDetail } from '../constants/types';

type podcastDetailState = {
  isLoading: boolean;
  podcastDetail: PodcastDetail | null;
  episodes: Episode[];
  setPodcastId: (id: string) => void;
};

const INITIAL_STATE: podcastDetailState = {
  isLoading: true,
  podcastDetail: null,
  episodes: [],
  setPodcastId: () => {},
};

export const PodcastDetailContext = createContext(INITIAL_STATE);

export const PodcastDetailProvider: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const [podcastId, setPodcastId] = useState('');
  const [podcastDetail, setPodcastDetail] = useState(INITIAL_STATE.podcastDetail);
  const [episodes, setEpisodes] = useState(INITIAL_STATE.episodes);

  const {
    isLoading,
    podcastDetail: detailData,
    episodes: episodesData,
  } = usePodcastDetailById(podcastId);

  useEffect(() => {
    if (!isLoading) {
      setPodcastDetail(detailData);
      setEpisodes(episodesData);
    }
  }, [isLoading, podcastId]);

  return (
    <PodcastDetailContext.Provider value={{ isLoading, podcastDetail, episodes, setPodcastId }}>
      {children}
    </PodcastDetailContext.Provider>
  );
};

export default PodcastDetailProvider;
