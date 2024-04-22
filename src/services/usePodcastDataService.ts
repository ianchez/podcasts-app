import { useQuery } from '@tanstack/react-query';

import ApiService from './ApiService';
import { PODCASTS_URL, PODCAST_DETAIL_URL } from '../constants/api';
import { PodcastsResultData, PodcastDetailResultData } from '../constants/types';

export const useFetchPodcasts = () =>
  useQuery<PodcastsResultData>({
    queryKey: ['podcasts'],
    queryFn: () => ApiService.getData(PODCASTS_URL),
  });

export const useFetchPodcastDetailById = (id: string, limit?: number) =>
  useQuery<PodcastDetailResultData>({
    queryKey: ['podcast', id, limit],
    queryFn: () => ApiService.getData(PODCAST_DETAIL_URL(id, limit)),
    enabled: !!id,
  });
