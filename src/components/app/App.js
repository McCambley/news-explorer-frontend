import { Switch, Route } from 'react-router-dom';
import Hero from '../hero/Hero';

function App() {
  return (
    <>
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
