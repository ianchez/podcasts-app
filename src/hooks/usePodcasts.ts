import { useQuery } from '@tanstack/react-query';
import ApiService from '../services/ApiService';
import { CACHE_TIME } from '../constants/api';

const usePodcasts = () => useQuery({
  queryKey: ['podcasts'],
  queryFn: async () => await ApiService.getPodcasts(),
  staleTime: CACHE_TIME
});

export default usePodcasts;
