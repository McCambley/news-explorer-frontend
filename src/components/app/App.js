import { Switch, Route } from 'react-router-dom';
import Hero from '../hero/Hero';
import Header from '../header/Header';
import About from '../about/About';
import Footer from '../footer/Footer';
import SearchResult from '../search-result/SearchResult';
import { articles } from '../../utils/savedArticles';
import { useState } from 'react';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  // this logic will change when the API is called
  const [isLoading, setIsLoading] = useState(false);
  const [isNothing, setIsNothing] = useState(false);
  const [isInitiated, setIsInitiated] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [savedArticles, setSavedArticles] = useState(articles);

  function submitSearch(evt) {
    evt.preventDefault();
    setIsInitiated(true);
    setIsLoading(true);
    console.log('Searching...');
    setTimeout(() => {
      setIsLoading(false);
      // setIsNothing(false);
      setSearchResults(articles);
      console.log('Done!');
    }, 300);
  }

  return (
    <>
      <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <Switch>
        <Route path="/saved-news">saved news</Route>
        <Route path="/">
          <Hero submitSearch={submitSearch} />
          <SearchResult
            loading={isLoading}
            searchResults={searchResults}
            failed={isNothing}
            loggedIn={loggedIn}
          />
          <About />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
