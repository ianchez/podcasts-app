class HttpClient {
  async get(url: string): Promise<Response> {
    return fetch(url);
  }
}

export default new HttpClient();