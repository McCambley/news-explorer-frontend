class MainApi {
  constructor() {
    this._baseUrl =
      process.env.NODE_ENV === 'development'
        ? 'http://localhost:5000'
        : 'https://api.mccambley-news.students.nomoreparties.site';
  }

  _checkResponse(res) {
    if (!res.ok) {
      return Promise.reject(`${res.status} error!`);
    }
    return res.json();
  }

  // ARTICLE METHODS
  // GET /articles getArticles
  getArticles() {
    return fetch(`${this._baseUrl}/articles`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    }).then((res) => this._checkResponse(res));
  }
  // POST /articles saveArticle
  saveArticle({ title, description, publishedAt, source, url, urlToImage }) {
    return fetch(`${this._baseUrl}/articles`, {
      method: 'POST',
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, description, publishedAt, source, url, urlToImage }),
    }).then((res) => this._checkResponse(res));
  }

  // DELETE /articles/:articleId removeArticle
  removeArticle(articleId) {
    return fetch(`${this._baseUrl}/articles/${articleId}`, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
      },
    }).then((res) => this._checkResponse(res));
  }

  // USER METHODS
  // GET /users/me // getUserInfo
  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    }).then((res) => this._checkResponse(res));
  }

  // AUTHORIZATION METHODS
  // POST /signup signup
  register(email, password, name) {
    return fetch(`${this._baseUrl}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
        name,
      }),
    }).then((response) => {
      if (response.status === 201) {
        return response.json();
      }
      if (response.status === 400) {
        throw new Error('One of the fields was filled in incorrectly');
      }
      if (response.status === 409) {
        throw new Error('This email is not available');
      }
    });
  }

  // POST /signin login
  login(email, password) {
    return fetch(`${this._baseUrl}/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
        if (response.status === 400) {
          throw new Error('One or more of the fields were not provided');
        }
        if (response.status === 401) {
          throw new Error('The user with the specified email not found ');
        }
      })
      .then((res) => {
        localStorage.setItem('token', res.token);
        return res;
      });
  }
}

export const mainApi = new MainApi();
