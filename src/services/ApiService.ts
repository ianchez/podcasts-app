import { PODCASTS_URL, PODCAST_DETAIL_URL } from '../constants/api';

interface ResponseApiAllOriginsType {
  contents: string;
  status: any;
};

class ApiService {
  static async getData(url: string): Promise<any> {
    const response = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(url)}`);

    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

    const data = response.json() as Promise<ResponseApiAllOriginsType>;
    return JSON.parse((await data).contents);
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
