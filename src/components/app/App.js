import { Switch, Route, useLocation } from 'react-router-dom';
import Hero from '../hero/Hero';
import Header from '../header/Header';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { homeTheme, savedArticleTheme } from '../style/ThemeStyles';

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const location = useLocation().pathname.substring(1);

  return (
    <>
      <ThemeProvider theme={location === '' ? homeTheme : savedArticleTheme}>
        <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      </ThemeProvider>
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
