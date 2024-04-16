import React, { createContext, useEffect, useState } from 'react';

import usePodcasts from '../hooks/usePodcasts';
import usePodcastDetailById from '../hooks/usePodcastDetailById';
import { Podcast } from '../constants/types';

type podcastsState = {
  isLoading: boolean;
  podcasts: Podcast[];
  podcastDetail: any;
  episodes: any[];
  setPodcastId: (id: string) => void;
}

const DEFAULT_STATE: podcastsState = {
  isLoading: true,
  podcasts: [],
  podcastDetail: null,
  episodes: [],
  setPodcastId: () => {},
}

export const PodcastsContext = createContext(DEFAULT_STATE);

type PodcastsProviderProps = {
  children: React.ReactNode;
}

export const PodcastsProvider = ({ children }: PodcastsProviderProps) => {
  const [ podcasts, setPodcasts ] = useState<Podcast[]>([]);
  const [ podcastId, setPodcastId ] = useState('');
  const [ podcastDetail, setPodcastDetail ] = useState<Podcast | null>(null);
  const [ episodes, setEpisodes ] = useState<any[]>([]);

  const { isLoading: isPodcastsLoading, data } = usePodcasts();
  const { isLoading: isPodcastDetailLoading, data: podcastDetailData } = usePodcastDetailById(podcastId);

  useEffect(() => {
    if (!isPodcastsLoading) {
      setPodcasts(data?.feed?.entry as Podcast[] || []);
    }
  } , [isPodcastsLoading]);

  useEffect(() => {
    if (!isPodcastDetailLoading) {
      const detailData = podcastDetailData?.results.find((data: any) => data.kind === "podcast");
      const episodeData = podcastDetailData?.results.filter((data: any) => data.kind === "podcast-episode");
      if (detailData) {
        setPodcastDetail(detailData as Podcast);
      }

      if (episodeData?.length) {
        setEpisodes(episodeData as Podcast[]);
      }
    }
  } , [isPodcastDetailLoading, podcastId]);

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
