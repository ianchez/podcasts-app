'use client';

import React, { createContext } from 'react';
import usePodcasts from '../hooks/usePodcasts';
import { Podcast } from '../constants/types';

type podcastsState = {
  isLoading: boolean;
  podcasts: Podcast[];
};

const INITIAL_STATE: podcastsState = {
  isLoading: true,
  podcasts: [],
};

export const PodcastsContext = createContext(INITIAL_STATE);

const PodcastsProvider: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const { isLoading, podcasts } = usePodcasts();

  return (
    <PodcastsContext.Provider value={{ isLoading, podcasts }}>{children}</PodcastsContext.Provider>
  );
};

export default PodcastsProvider;
