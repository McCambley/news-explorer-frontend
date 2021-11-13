class NewsApi {
  constructor() {
    this._baseUrl = 'https://newsapi.org/v2/';
    this._proxyUrl = 'https://nomoreparties.co/news/v2/';
    this._apiKey = '48c1590798934395b1afd26cab587a67';
  }

  getArticles(query) {
    return fetch(`${this._proxyUrl}everything?q=${query}&apiKey=${this._apiKey}`, {
      //   headers: {
      //     'X-Api-Key': this._apiKey,
      //   },
    }).then((response) => {
      if (!response.ok) {
        throw new Error(`Search failed! Status: ${response.status}`);
      }
      return response.json();
    });
  }
}

export const newsApi = new NewsApi();
