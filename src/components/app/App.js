import { Switch, Route } from 'react-router-dom';
import Hero from '../hero/Hero';
import Header from '../header/Header';
import About from '../about/About';
import Footer from '../footer/Footer';
import SavedCardList from '../saved-card-list/SavedCardList';
import SearchResult from '../search-result/SearchResult';
import SignIn from '../sign-in/SignIn';
import SignUp from '../sign-in/SignUp';
import { articles } from '../../utils/savedArticles';
import { useState } from 'react';
import SavedHero from '../saved-hero/SavedHero';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  // this logic will change when the API is called
  const [isLoading, setIsLoading] = useState(false);
  const [isNothing, setIsNothing] = useState(false);
  const [isInitiated, setIsInitiated] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [savedArticles, setSavedArticles] = useState(articles);
  const [showSignIn, setShowSignIn] = useState(true);
  const [showSignUp, setShowSignUp] = useState(false);

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
        <Route path="/saved-news">
          <SavedHero savedArticles={savedArticles} />
          <SavedCardList savedArticles={savedArticles} />
        </Route>
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
      <SignUp show={showSignUp} />
      <SignIn show={showSignIn} />
    </>
  );
}

export default App;
