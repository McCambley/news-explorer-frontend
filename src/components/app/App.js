import { Switch, Route } from 'react-router-dom';
import Hero from '../hero/Hero';
import Header from '../header/Header';
import About from '../about/About';
import Footer from '../footer/Footer';
import SavedCardList from '../saved-card-list/SavedCardList';
import SearchResult from '../search-result/SearchResult';
import SignIn from '../sign-in/SignIn';
import SignUp from '../sign-up/SignUp';
import { useState, useEffect } from 'react';
import SavedHero from '../saved-hero/SavedHero';
import Modal from '../modal/Modal';
import SignedUp from '../signed-up/SignedUp';
import ProtectedRoute from '../protected-route/ProtectedRoute';
import { newsApi } from '../../utils/NewsApi';
import { mainApi } from '../../utils/MainApi';
import { UserContext } from '../../contexts/UserContext';

function App() {
  // session states
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  // ux states
  const [isLoading, setIsLoading] = useState(false);
  const [isNothing, setIsNothing] = useState(false);
  // articles states
  const [searchTerm, setSearchTerm] = useState('');
  const [keyword, setKeyword] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [savedArticles, setSavedArticles] = useState([]);
  const [savedArticlesSorted, setSavedArticlesSorted] = useState([]);
  const [keywordCounter, setKeywordCounter] = useState({});
  // modal states
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [showSignedUp, setShowSignedUp] = useState(false);
  // auth form states
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');
  const [authErrorMessage, setAuthErrorMessage] = useState(null);

  // get current user information
  useEffect(() => {
    mainApi
      .getUserInfo()
      .then((response) => {
        setCurrentUser(response.data);
        setLoggedIn(true);
        getSavedArticles();
      })
      .catch((error) => {
        setCurrentUser({});
        setLoggedIn(false);
        setSavedArticles([]);
        setSearchResults([]);
      });
  }, [loggedIn]);

  // reset auth form states
  useEffect(() => {
    setEmail('');
    setPassword('');
    setUserName('');
    setAuthErrorMessage(null);
  }, [showSignIn, showSignUp, showSignedUp]);

  // When saved articles updates
  useEffect(() => {
    // talley the occurrence of each keyword
    setKeywordCounter(tallySavedKeywords());
    // sort the articles by keyword prevalence
    setSavedArticlesSorted(sortSavedArticles());
  }, [savedArticles]);

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
          closeModals();
          setLoggedIn(true);
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
        });
  }

  function handleSignUp(e) {
    e.preventDefault();
    const form = e.target;
    form.checkValidity() &&
      mainApi
        .register(email, password, userName)
        .then((response) => {
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
    setSearchResults([]);
    setKeyword(searchTerm);
    // update loading ux
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

  // create an object to tally the number of
  // articles saved per keyword
  function tallySavedKeywords() {
    let keywords = {};
    savedArticles.forEach((item) => {
      if (keywords[item.keyword]) {
        keywords[item.keyword]++;
      } else {
        keywords[item.keyword] = 1;
      }
    });
    return keywords;
  }

  // sort saved articles by popularity of keyword
  function sortSavedArticles() {
    const keywordCounter = tallySavedKeywords();
    return savedArticles
      .slice()
      .sort((a, b) => {
        return keywordCounter[a.keyword] - keywordCounter[b.keyword];
      })
      .reverse();
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
        <ProtectedRoute path="/saved-news" loggedIn={loggedIn}>
          <SavedHero savedArticles={savedArticles} keywordCounter={keywordCounter} />
          <SavedCardList
            savedArticlesSorted={savedArticlesSorted}
            getSavedArticles={getSavedArticles}
            keywordCounter={keywordCounter}
          />
        </ProtectedRoute>
        <Route path="/">
          <Hero submitSearch={submitSearch} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <SearchResult
            isLoading={isLoading}
            searchResults={searchResults}
            isNothing={isNothing}
            loggedIn={loggedIn}
            keyword={keyword}
            switchModals={switchModals}
            savedArticles={savedArticlesSorted}
            getSavedArticles={getSavedArticles}
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
