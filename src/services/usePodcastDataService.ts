import { useQuery } from '@tanstack/react-query';

import ApiService from './ApiService';
import { CACHE_TIME, PODCASTS_URL, PODCAST_DETAIL_URL } from '../constants/api';
import { PodcastsResultData, PodcastDetailResultData } from '../constants/types';

export const useFetchPodcasts = () =>
  useQuery({
    queryKey: ['podcasts'],
    queryFn: async () => (await ApiService.getData(PODCASTS_URL)) as PodcastsResultData,
    staleTime: CACHE_TIME,
  });

export const useFetchPodcastDetailById = (id: string, limit?: number) =>
  useQuery({
    queryKey: ['podcast', id, limit],
    queryFn: async () =>
      (await ApiService.getData(PODCAST_DETAIL_URL(id, limit))) as PodcastDetailResultData,
    staleTime: CACHE_TIME,
    enabled: !!id,
  });
