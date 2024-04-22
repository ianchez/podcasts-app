import { useFetchPodcastDetailById } from '../services/usePodcastDataService';
import { Episode, PodcastDetail } from '../constants/types';

const usePodcastDetailById = (podcastId: string) => {
  const { isLoading, data } = useFetchPodcastDetailById(podcastId);

  const podcastDetail = data?.results.find((data) => data.kind === 'podcast') as PodcastDetail;
  const episodes =
    (data?.results.filter((data) => data.kind === 'podcast-episode') as Episode[]) || [];

  return {
    isLoading,
    podcastDetail,
    episodes,
  };
};

export default usePodcastDetailById;
