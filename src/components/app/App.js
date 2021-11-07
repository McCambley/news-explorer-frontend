import { Switch, Route } from 'react-router-dom';
import Hero from '../hero/Hero';
import Header from '../header/Header';
import About from '../about/About';
import Footer from '../footer/Footer';
import SavedCardList from '../saved-card-list/SavedCardList';
import SearchResult from '../search-result/SearchResult';
import SignIn from '../sign-in/SignIn';
import SignUp from '../sign-up/SignUp';
import { articles } from '../../utils/savedArticles';
import { useState, useEffect } from 'react';
import SavedHero from '../saved-hero/SavedHero';
import Modal from '../modal/Modal';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  // this logic will change when the API is called
  const [isLoading, setIsLoading] = useState(false);
  const [isNothing, setIsNothing] = useState(false);
  const [isInitiated, setIsInitiated] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [savedArticles, setSavedArticles] = useState(articles);
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');

  useEffect(() => {
    setEmail('');
    setPassword('');
  }, [showSignIn, showSignUp]);

  function switchModals() {
    setShowSignIn(!showSignIn);
    setShowSignUp(!showSignUp);
  }
  function closeModals() {
    setShowSignIn(false);
    setShowSignUp(false);
  }

  function handleLogin(e) {
    e.preventDefault();
    console.log({ email, password });
    closeModals();
    setLoggedIn(true);
  }

  function handleSignUp(e) {
    console.log({ email, password, userName });
    e.preventDefault();
    switchModals();
    setEmail('');
    setUserName('');
    setPassword('');
  }

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
      <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} setShowSignIn={setShowSignIn} />
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
      <Modal show={showSignUp} closeModals={closeModals}>
        <SignUp
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          userName={userName}
          setUserName={setUserName}
          switchModals={switchModals}
          handleSignUp={handleSignUp}
        />
      </Modal>
      <Modal show={showSignIn} closeModals={closeModals}>
        <SignIn
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          switchModals={switchModals}
          handleLogin={handleLogin}
        />
      </Modal>
    </>
  );
}

export default App;
