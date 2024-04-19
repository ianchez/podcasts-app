import {CORS_SERVICE_URL} from '../constants/api';
import HttpClient from './HttpClient';


class ApiService {
  constructor(
    private httpClient: typeof HttpClient,
    private corsServiceUrl: string
  ) {}

  async getData(url: string): Promise<any> {
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
};

const apiService = new ApiService(HttpClient, CORS_SERVICE_URL);
export default apiService;