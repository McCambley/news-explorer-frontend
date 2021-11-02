import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Switch>
        <Route path="/saved-news">saved news</Route>
        <Route path="/">Home</Route>
      </Switch>
    </>
  );
}

export default App;
