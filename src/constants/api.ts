export const CORS_SERVICE_URL = process.env.CORS_SERVICE_URL ?? 'https://api.allorigins.win/raw';
export const PODCASTS_URL = process.env.NEXT_PUBLIC_ITUNES_PODCASTS_URL ?? '';
export const PODCAST_DETAIL_URL = (id: string, limit = 20): string => {
  const podcastsUrl = process.env.NEXT_PUBLIC_ITUNES_EPISODES_URL ?? '';
  return podcastsUrl.replace('{id}', id).replace('{limit}', limit.toString());
};

export const CACHE_TIME = process.env.NEXT_PUBLIC_CACHE_TIME_IN_MINUTES
  ? Number(process.env.NEXT_PUBLIC_CACHE_TIME_IN_MINUTES ?? '') * 1000 * 60
  : 1000 * 60 * 60 * 24; // 1 day
