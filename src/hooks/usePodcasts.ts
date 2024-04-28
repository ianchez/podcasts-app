import { useFetchPodcasts } from '../services/usePodcastDataService';

const usePodcastsHook = () => {
  const { isLoading, data } = useFetchPodcasts();

  return {
    isLoading,
    podcasts: data?.feed?.entry || [],
  };
};

export default usePodcastsHook;
