import React, { createContext, useEffect, useState } from 'react';
import usePodcasts from '../hooks/usePodcasts';
import { Podcast } from '../constants/types';

type podcastsState = {
  isLoading: boolean;
  podcasts: Podcast[];
}

const DEFAULT_STATE: podcastsState = {
  isLoading: true,
  podcasts: []
}

export const PodcastsContext = createContext(DEFAULT_STATE);

type PodcastsProviderProps = {
  children: React.ReactNode;
}

export const PodcastsProvider = ({ children }: PodcastsProviderProps) => {
  const [ podcasts, setPodcasts ] = useState<Podcast[]>([]);

  const { isLoading, data } = usePodcasts();

  useEffect(() => {
    if (!isLoading) {
      setPodcasts(data?.feed?.entry as Podcast[] || []);
    }
  } , [isLoading]);

  return (
    <PodcastsContext.Provider value={{ isLoading, podcasts }}>
      {children}
    </PodcastsContext.Provider>
  );
};

export default PodcastsProvider;
