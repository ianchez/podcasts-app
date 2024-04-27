import { useFetchPodcasts } from '../services/usePodcastDataService';

const usePodcastsHook = () => {
  const { isLoading, data } = useFetchPodcasts();

  console.log({data});


  return {
    isLoading,
    podcasts: data?.feed?.entry || [],
  };
};

export default usePodcastsHook;
