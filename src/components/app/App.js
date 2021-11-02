import { Switch, Route } from 'react-router-dom';
import Hero from '../hero/Hero';
import Header from '../header/Header';
import React from 'react';

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  return (
    <>
      <Header loggedIn={loggedIn} />
      <Switch>
        <Route path="/saved-news">saved news</Route>
        <Route path="/">
          <Hero />
        </Route>
      </Switch>
    </>
  );
}

export default App;
