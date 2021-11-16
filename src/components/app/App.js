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
import SignedUp from '../signed-up/SignedUp';
import { newsApi } from '../../utils/news-api';

function App() {
  const [loggedIn, setLoggedIn] = useState(true);

  // this logic will change when the API is called
  const [isLoading, setIsLoading] = useState(false);
  const [isNothing, setIsNothing] = useState(false);

  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [savedArticles, setSavedArticles] = useState([]);

  // modal states
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [showSignedUp, setShowSignedUp] = useState(false);

  // user states
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');
  // this will be replaced with a server response of "email taken"
  const [emailTaken, setEmailTaken] = useState(false);

  useEffect(() => {
    setEmail('');
    setPassword('');
    setUserName('');
    setEmailTaken(false);
  }, [showSignIn, showSignUp, showSignedUp]);

  // modal handlers
  function switchModals(role) {
    if (role === 'signup') {
      // close and open signup
      setShowSignIn(false);
      setShowSignUp(true);
      setShowSignedUp(false);
    } else if (role === 'signin') {
      //close and open signin
      setShowSignIn(true);
      setShowSignUp(false);
      setShowSignedUp(false);
    } else if (role === 'signedup') {
      // close and open signedin
      setShowSignIn(false);
      setShowSignUp(false);
      setShowSignedUp(true);
    } else {
      // catch wrong input
      closeModals();
    }
  }

  function closeModals() {
    setShowSignIn(false);
    setShowSignUp(false);
    setShowSignedUp(false);
  }

  function handleLogin(e) {
    e.preventDefault();
    if (e.target.checkValidity()) {
      closeModals();
      setLoggedIn(true);
    } else {
      console.log('Invalid sign in');
    }
  }

  function handleSignUp(e) {
    e.preventDefault();
    // this is a mock error thrower that will be replaced
    // when the backend returns a email taken error
    if (email === 'jake@email.com') {
      setEmailTaken(true);
      return;
    }
    if (e.target.checkValidity()) {
      // if form is valid, do something
      switchModals('signedup');
      setEmail('');
      setUserName('');
      setPassword('');
    } else {
      // if form is valid, do nothing
      console.log('Invalid sign up');
    }
  }

  function submitSearch() {
    // update loading ux
    setSearchResults([]);
    setSearchTerm('');
    setIsLoading(true);
    setIsNothing(false);
    // search for news
    newsApi
      .getArticles(searchTerm)
      .then((articles) => {
        setIsLoading(false);
        setSearchResults(articles.articles);
        if (articles.articles.length < 1) {
          setIsNothing(true);
        }
      })
      .catch((error) => {
        setIsLoading(false);
        setIsNothing(true);
        console.error(error);
      });
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
          <Hero submitSearch={submitSearch} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <SearchResult
            isLoading={isLoading}
            searchResults={searchResults}
            isNothing={isNothing}
            loggedIn={loggedIn}
          />
          <About />
        </Route>
      </Switch>
      <Footer />
      <Modal show={showSignUp || showSignIn || showSignedUp} closeModals={closeModals}>
        <SignedUp show={showSignedUp} setShowSignIn={setShowSignIn} switchModals={switchModals} />
        <SignUp
          show={showSignUp}
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
        <SignIn
          show={showSignIn}
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
