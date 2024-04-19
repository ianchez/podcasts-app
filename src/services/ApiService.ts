import { PODCASTS_URL, PODCAST_DETAIL_URL } from '../constants/api';
import HttpClient from './HttpClient';

type ResponseApiAllOriginsType = {
  contents: string;
  status: {
    url: string;
    content_type: string;
    http_code: number;
    response_time: string;
    content_length: string;
  };
};

class ApiService {
  constructor(private httpClient: typeof HttpClient) {}

  private async getData(url: string): Promise<ResponseApiAllOriginsType> {
    try {
      const response = await this.httpClient.get(`https://api.allorigins.win/get?url=${encodeURIComponent(url)}`);
  
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
    const data = await this.getData(PODCASTS_URL);
    return JSON.parse(data.contents);
  };

  async getPodcastDetail(id: string, limit?: number) {
    const data = await this.getData(PODCAST_DETAIL_URL(id, limit));
    return JSON.parse(data.contents);
  };
};

export default new ApiService(HttpClient);