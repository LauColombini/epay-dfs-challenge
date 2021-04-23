import React from 'react'
import { BrowserRouter, Switch, Route, Link, Redirect } from "react-router-dom";
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import Home from './layouts/home/index'
import Facturas from './layouts/list/index'
function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path='/facturas' component={Facturas} />
        </Switch>
      </BrowserRouter>
    </QueryClientProvider>

  );
}

export default App;
