import { useEffect, useState } from 'react';
import { useFetchPodcastDetailById } from '../services/usePodcastDataService';
import { Episode, PodcastDetail } from '../constants/types';

const usePodcastDetailById = (podcastId: string) => {
  const [podcastDetail, setPodcastDetail] = useState<PodcastDetail | null>(null);
  const [episodes, setEpisodes] = useState<Episode[]>([]);

  const { isLoading, data } = useFetchPodcastDetailById(podcastId);

  useEffect(() => {
    if (!isLoading && data) {
      const detailData = data.results.find((data) => data.kind === 'podcast');
      const episodeData = data.results.filter((data) => data.kind === 'podcast-episode');

      if (detailData) {
        setPodcastDetail(detailData as PodcastDetail);
      }

      if (episodeData?.length) {
        setEpisodes(episodeData as Episode[]);
      }
    }
  }, [isLoading, podcastId]);

  return {
    isLoading,
    podcastDetail,
    episodes,
  };
};

export default usePodcastDetailById;
