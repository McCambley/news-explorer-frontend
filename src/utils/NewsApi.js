class NewsApi {
  constructor() {
    this._baseUrl = 'https://newsapi.org/v2/';
    this._proxyUrl = 'https://nomoreparties.co/news/v2/';
    // Primary
    // this._apiKey = '48c1590798934395b1afd26cab587a67';
    // Secondary
    this._apiKey = 'e96e734cb0194eafae7a5c80c5eab1ca';
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
