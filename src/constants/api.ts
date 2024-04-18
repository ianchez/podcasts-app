export const PODCASTS_URL = 'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json';
export const PODCAST_DETAIL_URL = (id: string, limit = 20): string =>
    `https://itunes.apple.com/lookup?id=${id}&media=podcast&entity=podcastEpisode&limit=${limit}`;

export const CACHE_TIME = 1000 * 60 * 60 * 24; // 1 day