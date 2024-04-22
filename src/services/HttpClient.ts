class HttpClient {
  async get(url: string): Promise<Response> {
    return fetch(url, { cache: 'no-store' });
  }
}

const httpClient = new HttpClient();
export default httpClient;
