class HttpClient {
  async get(url: string): Promise<Response> {
    return fetch(url);
  }
}

const httpClient = new HttpClient();
export default httpClient;