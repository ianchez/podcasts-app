import { useEffect, useState } from 'react';
import { useFetchPodcasts } from '../services/usePodcastDataService';
import { Podcast } from '../constants/types';

const usePodcastsHook = () => {
  const [ podcasts, setPodcasts ] = useState<Podcast[]>([]);

  const { isLoading, data } = useFetchPodcasts();

  useEffect(() => {
    if (!isLoading) {
      setPodcasts(data?.feed.entry || []);
    }
  } , [isLoading, data?.feed.entry]);

  return {
    isLoading,
    podcasts,
  };
}

export default usePodcastsHook;