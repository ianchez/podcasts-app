import {
  CORS_SERVICE_URL,
  PODCASTS_URL,
  PODCAST_DETAIL_URL
} from '../constants/api';
import { PodcastDetailResultData, PodcastsResultData } from '../constants/types';
import HttpClient from './HttpClient';


class ApiService {
  constructor(
    private httpClient: typeof HttpClient,
    private corsServiceUrl: string
  ) {}

  private async getData(url: string): Promise<PodcastsResultData | PodcastDetailResultData> {
    try {
      const response = await this.httpClient.get(`${this.corsServiceUrl}?url=${encodeURIComponent(url)}`);
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      };
  
      return response.json();
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  async getPodcasts() {
    return await this.getData(PODCASTS_URL) as PodcastsResultData;
  };

  async getPodcastDetail(id: string, limit?: number) {
    return await this.getData(PODCAST_DETAIL_URL(id, limit)) as PodcastDetailResultData;
  };
};

export default new ApiService(HttpClient, CORS_SERVICE_URL);
