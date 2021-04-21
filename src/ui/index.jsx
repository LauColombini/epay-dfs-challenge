import React from 'react'
import { BrowserRouter, Switch, Route, Link, Redirect } from "react-router-dom";
import Home from './layouts/home/index'
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>

  );
}

export default App;
