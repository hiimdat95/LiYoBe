import React from "react";
import ReactDOM from "react-dom";
import { useRouterHistory } from 'react-router';
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';

import '../assets/css/material-dashboard-react.css?v=1.4.1"';
import 'font-awesome/css/font-awesome.min.css';
import { store } from './store';
import indexRoutes from "./routes/index.jsx";
// setup fake backend
import { configureFakeBackend } from './helpers';
configureFakeBackend();

const hist = createBrowserHistory();
// const browerHistorty=useRouterHistory(createBrowserHistory)({})

ReactDOM.render(
  <Provider store={store}>
    <Router history={hist}>
      <Switch>
        {indexRoutes.map((prop, key) => {
          return <Route path={prop.path} component={prop.component} key={key} />;
        })}
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("app")
);
