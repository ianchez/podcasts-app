import React, { createContext, useState } from 'react';

import usePodcasts from '../hooks/usePodcasts';
import usePodcastDetailById from '../hooks/usePodcastDetailById';
import { Episode, Podcast, PodcastDetail } from '../constants/types';

type podcastsState = {
  isLoading: boolean;
  podcasts: Podcast[];
  podcastDetail: PodcastDetail | null;
  episodes: Episode[];
  setPodcastId: (id: string) => void;
};

const DEFAULT_STATE: podcastsState = {
  isLoading: true,
  podcasts: [],
  podcastDetail: null,
  episodes: [],
  setPodcastId: () => {},
};

export const PodcastsContext = createContext(DEFAULT_STATE);


type PodcastsProviderProps = {
  children: React.ReactNode;
};

export const PodcastsProvider: React.FC<PodcastsProviderProps> = ({ children }) => {
  const [ podcastId, setPodcastId ] = useState('');
  const { isLoading: isPodcastsLoading, podcasts } = usePodcasts();
  const { isLoading: isPodcastDetailLoading, podcastDetail, episodes } = usePodcastDetailById(podcastId);

  const value = {
    isLoading: isPodcastsLoading || isPodcastDetailLoading,
    podcasts,
    podcastDetail,
    episodes,
    setPodcastId,
  }

  return (
    <PodcastsContext.Provider value={value}>
      {children}
    </PodcastsContext.Provider>
  );
};

export default PodcastsProvider;
