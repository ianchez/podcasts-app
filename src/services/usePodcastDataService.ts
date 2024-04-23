import { useQuery } from '@tanstack/react-query';

import ApiService from './ApiService';
import { PodcastsResultData, PodcastDetailResultData } from '../constants/types';

export const useFetchPodcasts = () =>
  useQuery<PodcastsResultData>({
    queryKey: ['podcasts'],
    queryFn: async () => await ApiService.getPodcasts(),
  });

export const useFetchPodcastDetailById = (id: string, limit?: number) =>
  useQuery<PodcastDetailResultData>({
    queryKey: ['podcast', id, limit],
    queryFn: async () => await ApiService.getPodcastDetailById(id, limit),
    enabled: !!id,
  });
