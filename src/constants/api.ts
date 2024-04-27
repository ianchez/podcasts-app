export const CORS_SERVICE_URL =
  process.env.NEXT_PUBLIC_CORS_SERVICE_URL ?? 'https://api.allorigins.win/raw';

const DEFAULT_LIMIT = {
  PODCASTS: Number(process.env.NEXT_PUBLIC_PODCASTS_LIMIT ?? 100),

  // Setting the default limit to 200 because thats the maximum limit allowed by the API
  // setting it to 0 will return only 1 episode
  // and avoiding the limit param will return only 50
  // Check https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/iTuneSearchAPI/Searching.html#//apple_ref/doc/uid/TP40017632-CH5-SW1
  EPISODES: Number(process.env.NEXT_PUBLIC_EPISODES_LIMIT ?? 200),
};

export const PODCASTS_URL = (limit = DEFAULT_LIMIT.PODCASTS): string => {
  const podcastsUrl = process.env.NEXT_PUBLIC_ITUNES_PODCASTS_URL ?? '';
  return podcastsUrl.replace('{limit}', limit.toString());
};

export const PODCAST_DETAIL_URL = (id: string, limit = DEFAULT_LIMIT.EPISODES): string => {
  let detailUrl = process.env.NEXT_PUBLIC_ITUNES_EPISODES_URL ?? '';
  if (limit) detailUrl += `&limit=${limit}`;
  return detailUrl.replace('{id}', id);
};

export const CACHE_TIME = process.env.NEXT_PUBLIC_CACHE_TIME_IN_MINUTES
  ? Number(process.env.NEXT_PUBLIC_CACHE_TIME_IN_MINUTES ?? '') * 1000 * 60
  : 1000 * 60 * 60 * 24; // 1 day
