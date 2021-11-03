import { Switch, Route } from 'react-router-dom';
import Hero from '../hero/Hero';
import Header from '../header/Header';
import About from '../about/About';
import Footer from '../footer/Footer';
import SearchResults from '../search-results/SearchResults';
import { articles } from '../../utils/savedArticles';
import { useState } from 'react';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  // this logic will change when the API is called
  const [isLoading, setIsLoading] = useState(true);
  const [isNothing, setIsNothing] = useState(true);
  const [searchResults, setSearchResults] = useState({});

  function submitSearch(evt) {
    evt.preventDefault();
    setIsLoading(true);
    console.log('Searching...');
    setTimeout(() => {
      setIsLoading(false);
      setIsNothing(true);
      setSearchResults(articles);
      console.log('Done!');
    }, 2000);
  }

  return (
    <>
      <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <Switch>
        <Route path="/saved-news">saved news</Route>
        <Route path="/">
          <Hero submitSearch={submitSearch} />
          <SearchResults loading={isLoading} results={searchResults} failed={isNothing} />
          <About />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
