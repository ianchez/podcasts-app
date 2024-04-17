import { PODCASTS_URL, PODCAST_DETAIL_URL } from '../constants/api';

type ResponseApiAllOriginsType = {
  contents: string;
  status: any;
};

class ApiService {
  private async getData(url: string): Promise<ResponseApiAllOriginsType> {
    const response = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(url)}`);

    if (!response.ok) {
      const errorMessage = "HTTP error! status: "
      console.error(errorMessage, response.status, response);
      throw new Error(`${errorMessage}${response.status}`);
    };

    const data = response.json() as Promise<ResponseApiAllOriginsType>;
    return JSON.parse((await data).contents);
  };

  getPodcasts(): Promise<any> {
    return this.getData(PODCASTS_URL)
  };

  getPodcastDetail(id: string, limit?: number): Promise<any> {
    return this.getData(PODCAST_DETAIL_URL(id, limit))
  };
};

const apiService = new ApiService();
export default apiService;
