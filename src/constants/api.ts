export const CORS_SERVICE_URL = process.env.CORS_SERVICE_URL ?? 'https://api.allorigins.win/raw';

const DEFAULT_LIMIT = {
  PODCASTS: Number(process.env.NEXT_PUBLIC_PODCASTS_LIMIT ?? 100),
  EPISODES: Number(process.env.NEXT_PUBLIC_EPISODES_LIMIT ?? 20),
};
export const PODCASTS_URL = (limit = DEFAULT_LIMIT.PODCASTS): string => {
  const podcastsUrl = process.env.NEXT_PUBLIC_ITUNES_PODCASTS_URL ?? '';
  return podcastsUrl.replace('{limit}', limit.toString());
};
export const PODCAST_DETAIL_URL = (id: string, limit = DEFAULT_LIMIT.EPISODES): string => {
  const detailUrl = process.env.NEXT_PUBLIC_ITUNES_EPISODES_URL ?? '';
  return detailUrl.replace('{id}', id).replace('{limit}', limit.toString());
};

export const CACHE_TIME = process.env.NEXT_PUBLIC_CACHE_TIME_IN_MINUTES
  ? Number(process.env.NEXT_PUBLIC_CACHE_TIME_IN_MINUTES ?? '') * 1000 * 60
  : 1000 * 60 * 60 * 24; // 1 day
