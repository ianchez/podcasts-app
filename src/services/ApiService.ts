import { PODCASTS_URL, PODCAST_DETAIL_URL } from '../constants/api';

class ApiService {
  static async getData(url: string): Promise<any> {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    return await response.json()
  };

  async getPodcasts(): Promise<any> {
    return await ApiService.getData(PODCASTS_URL)
  };

  async getPodcastDetail(id: string, limit?: number): Promise<any> {
    return await ApiService.getData(PODCAST_DETAIL_URL(id, limit))
  };
};

const apiService = new ApiService();
export default apiService;
