import { Switch, Route } from 'react-router-dom';
import Hero from '../hero/Hero';
import Header from '../header/Header';
import About from '../about/About';
import Footer from '../footer/Footer';
import SavedCardList from '../saved-card-list/SavedCardList';
import SearchResult from '../search-result/SearchResult';
import SignIn from '../sign-in/SignIn';
import SignUp from '../sign-up/SignUp';
// import { articles } from '../../utils/savedArticles';
import { useState, useEffect } from 'react';
import SavedHero from '../saved-hero/SavedHero';
import Modal from '../modal/Modal';
import SignedUp from '../signed-up/SignedUp';
import { newsApi } from '../../utils/NewsApi';
import { mainApi } from '../../utils/MainApi';
import { UserContext } from '../../contexts/UserContext';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  // this logic will change when the API is called
  const [isLoading, setIsLoading] = useState(false);
  const [isNothing, setIsNothing] = useState(false);

  const [searchTerm, setSearchTerm] = useState('');
  const [keyword, setKeyword] = useState('');
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
  const [currentUser, setCurrentUser] = useState({});
  const [authErrorMessage, setAuthErrorMessage] = useState(null);

  // get current user information
  useEffect(() => {
    // loggedIn &&
    mainApi
      .getUserInfo()
      .then((response) => {
        console.log(response.data);
        setCurrentUser(response.data);
        setLoggedIn(true);
        // TODO get saved artcles
        getSavedArticles();
      })
      .catch((error) => {
        setCurrentUser({});
        setLoggedIn(false);
        setSavedArticles([]);
      });
  }, [loggedIn]);

  // reset auth form states
  useEffect(() => {
    setEmail('');
    setPassword('');
    setUserName('');
    setAuthErrorMessage(null);
  }, [showSignIn, showSignUp, showSignedUp]);

  useEffect(() => {}, []);

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
    const form = e.target;
    form.checkValidity() &&
      mainApi
        .login(email, password)
        .then((response) => {
          console.log(response);
          closeModals();
          setLoggedIn(true);
          setEmail('');
          setUserName('');
          setPassword('');
        })
        .catch((error) => {
          console.log('Invalid sign in');
          // show error message 'This email is not available' on 409 response
          setAuthErrorMessage(error.message);
          // display for 3 seconds
          setTimeout(() => {
            setAuthErrorMessage(null);
          }, 3000);
        });
  }

  function handleSignUp(e) {
    e.preventDefault();
    const form = e.target;
    form.checkValidity() &&
      mainApi
        .register(email, password, userName)
        .then((response) => {
          console.log(response);
          switchModals('signedup');
          setEmail('');
          setUserName('');
          setPassword('');
        })
        .catch((error) => {
          // show error message 'This email is not available' on 409 response
          setAuthErrorMessage(error.message);
          // display for 3 seconds
          setTimeout(() => {
            setAuthErrorMessage(null);
          }, 3000);
          // TODO refactor to display transitioning error message
        });
  }

  function handleLogout() {
    localStorage.removeItem('token');
    setLoggedIn(false);
    setCurrentUser({});
  }

  function submitSearch() {
    // update loading ux
    setSearchResults([]);
    setKeyword(searchTerm);
    // setSearchTerm('');
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

  function getSavedArticles() {
    mainApi
      .getArticles()
      .then((response) => setSavedArticles(response.data))
      .catch((error) => console.error(error));
  }

  return (
    <UserContext.Provider value={currentUser}>
      <Header
        loggedIn={loggedIn}
        setLoggedIn={setLoggedIn}
        setShowSignIn={setShowSignIn}
        handleLogout={handleLogout}
      />
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
            keyword={keyword}
            switchModals={switchModals}
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
          authErrorMessage={authErrorMessage}
        />
        <SignIn
          show={showSignIn}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          switchModals={switchModals}
          handleLogin={handleLogin}
          authErrorMessage={authErrorMessage}
        />
      </Modal>
    </UserContext.Provider>
  );
}

export default App;
