class NewsApi {
  constructor() {
    this._baseUrl = 'https://newsapi.org/v2/';
    this._proxyUrl = 'https://nomoreparties.co/news/v2/';
    this._apiKey = process.env.REACT_APP_API_KEY;
    this._maxAge = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
  }

  getArticles(query) {
    return fetch(
      `${this._proxyUrl}everything?q=${query}&sortBy=publishedAt&from=${this._maxAge}&language=en&pageSize=100&apiKey=${this._apiKey}`,
      {
        //   headers: {
        //     'X-Api-Key': this._apiKey,
        //   },
      }
    ).then((response) => {
      if (!response.ok) {
        throw new Error(`Search failed! Status: ${response.status}`);
      }
      return response.json();
    });
  }
}

export const newsApi = new NewsApi();
