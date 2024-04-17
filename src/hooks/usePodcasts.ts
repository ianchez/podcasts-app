import { useQuery } from '@tanstack/react-query';
import ApiService from '../services/ApiService';
import { CACHE_TIME } from '../constants/api';
import { PodcastsResultData } from '../constants/types';

const usePodcasts = () => useQuery({
  queryKey: ['podcasts'],
  queryFn: async () => await ApiService.getPodcasts() as PodcastsResultData,
  staleTime: CACHE_TIME
});

export default usePodcasts;
