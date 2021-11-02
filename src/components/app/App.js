import { Switch, Route } from 'react-router-dom';
import Hero from '../hero/Hero';
import Header from '../header/Header';

function App() {
  return (
    <>
      <Header />
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
