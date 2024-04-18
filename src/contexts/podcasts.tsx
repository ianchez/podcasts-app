import React, { createContext, useEffect, useState } from 'react';

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
  const [ podcasts, setPodcasts ] = useState<Podcast[]>([]);
  const [ podcastId, setPodcastId ] = useState('');
  const [ podcastDetail, setPodcastDetail ] = useState<PodcastDetail | null>(null);
  const [ episodes, setEpisodes ] = useState<Episode[]>([]);

  const { isLoading: isPodcastsLoading, data } = usePodcasts();
  const { isLoading: isPodcastDetailLoading, data: podcastDetailData } = usePodcastDetailById(podcastId);

  useEffect(() => {
    if (!isPodcastsLoading) {
      setPodcasts(data?.feed.entry || []);
    }
  } , [isPodcastsLoading]);

  useEffect(() => {
    if (!isPodcastDetailLoading && podcastDetailData) {
      const detailData = podcastDetailData.results.find((data) => data.kind === "podcast");
      const episodeData = podcastDetailData.results.filter((data) => data.kind === "podcast-episode");

      if (detailData) {
        setPodcastDetail(detailData as PodcastDetail);
      }

      if (episodeData?.length) {
        setEpisodes(episodeData as Episode[]);
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
