import Home from "./pages/Home";
import "./App.css";
import { QueryCache, ReactQueryCacheProvider } from "react-query";
import Post from "./pages/post/Post";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import NoMatch from "./components/NoMatch";
function App() {
  const queryCache = new QueryCache();
  return (
    <ReactQueryCacheProvider queryCache={queryCache}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/post" component={Post} />
          {/* <Route path="/signup" component={Signup} /> */}

          {/* Private Route */}
          {/* <PrivateRoute path="/dashboard" component={Dashboard} /> */}
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </BrowserRouter>
      {/* <Post /> */}
    </ReactQueryCacheProvider>
  );
}

export default App;
