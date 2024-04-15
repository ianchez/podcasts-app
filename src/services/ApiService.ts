const PODCASTS_URL = 'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json'
const PODCAST_DETAIL_URL = (id: string, limit = 20): string =>
    `https://itunes.apple.com/lookup?id=${id}&media=podcast&entity=podcastEpisode&limit=${limit}`

class ApiService {
  static async getData(url: string): Promise<any> {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    return await response.json()
  }

  async getPodcasts(): Promise<any> {
    return await ApiService.getData(PODCASTS_URL)
  }

  async getPodcastDetail(id: string, limit?: number): Promise<any> {
    return await ApiService.getData(PODCAST_DETAIL_URL(id, limit))
  }
}

const apiService = new ApiService()
export default apiService
