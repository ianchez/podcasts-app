import { PodcastDetailResultData, PodcastsResultData } from 'src/constants/types';
import { CORS_SERVICE_URL, PODCASTS_URL, PODCAST_DETAIL_URL } from '../constants/api';
import HttpClient from './HttpClient';

class ApiService {
  constructor(
    private httpClient: typeof HttpClient,
    private corsServiceUrl: string,
  ) {}

  private async getData(url: string): Promise<any> {
    'use server';
    try {
      if (!url) {
        throw new Error('URL is required for fetching data.');
      }

      const response = await this.httpClient.get(
        `${this.corsServiceUrl}?url=${encodeURIComponent(url)}`,
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return response.json();
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  public async getPodcasts(): Promise<PodcastsResultData> {
    return this.getData(PODCASTS_URL);
  }

  public async getPodcastDetailById(id: string, limit?: number): Promise<PodcastDetailResultData> {
    return this.getData(PODCAST_DETAIL_URL(id, limit));
  }
}

const apiService = new ApiService(HttpClient, CORS_SERVICE_URL);
export default apiService;
