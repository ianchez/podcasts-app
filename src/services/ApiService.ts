const PODCASTS_URL = 'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json'
const PODCAST_DETAIL_URL = (id: string, limit = 20): string =>
    `https://itunes.apple.com/lookup?id=${id}&media=podcast&entity=podcastEpisode&limit=${limit}`

const getData = async (url: string): Promise<any> => {
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`)
  }
  return await response.json()
}

export const getPodcasts = async (): Promise<any> =>
  await getData(PODCASTS_URL)

export const getPodcastDetail = async (id: string, limit?: number): Promise<any> =>
  await getData(PODCAST_DETAIL_URL(id, limit))
