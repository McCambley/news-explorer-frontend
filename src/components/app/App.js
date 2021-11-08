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
  const [showSignUp, setShowSignUp] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');
  const [emailTaken, setEmailTaken] = useState(false);

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
    if (e.target.checkValidity()) {
      console.log({ email, password });
      closeModals();
      setLoggedIn(true);
    } else {
      console.log('Invalid sign in');
    }
  }

  function handleSignUp(e) {
    e.preventDefault();
    if (email === 'jake@email.com') {
      setEmailTaken(true);
      return;
    }
    if (e.target.checkValidity()) {
      console.log({ email, password, userName });
      switchModals();
      setEmail('');
      setUserName('');
      setPassword('');
    } else {
      console.log('Invalid sign up');
      console.log(e.target.validate);
    }
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
          // show={showSignUp}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          userName={userName}
          setUserName={setUserName}
          switchModals={switchModals}
          handleSignUp={handleSignUp}
          emailTaken={emailTaken}
        />
      </Modal>
      <Modal show={showSignIn} closeModals={closeModals}>
        <SignIn
          // show={showSignIn}
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
