import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './Pages/Home';
import BlastProcess from './Pages/BlastProcess';
import BlastDetail from './Pages/BlastDetail';
import NotFound from './Pages/NotFound';
import NewAuthorization from './Pages/NewAuthorization';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/blast-process/:processId" component={BlastProcess} />
        <Route exact path="/blast/:blastId" component={BlastDetail} />
        <Route exact path="/new-authorization" component={NewAuthorization} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
