import { useQuery } from '@tanstack/react-query';
import ApiService from '../services/ApiService';
import { CACHE_TIME } from '../constants/api';
import { PodcastDetailResultData } from '../constants/types';

const usePodcastDetailById = (id: string) => useQuery({
  queryKey: ['podcast', id],
  queryFn: async () => await ApiService.getPodcastDetail(id) as PodcastDetailResultData,
  staleTime: CACHE_TIME // 10 minutes
});

export default usePodcastDetailById;
