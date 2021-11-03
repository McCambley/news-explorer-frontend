import { Switch, Route } from 'react-router-dom';
import Hero from '../hero/Hero';
import Header from '../header/Header';
import About from '../about/About';
import Footer from '../footer/Footer';
import React from 'react';

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);

  return (
    <>
      <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <Switch>
        <Route path="/saved-news">saved news</Route>
        <Route path="/">
          <Hero />
          <About />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
