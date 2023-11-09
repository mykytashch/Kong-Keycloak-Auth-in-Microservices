// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import keycloak from './keycloak';
import { ReactKeycloakProvider } from '@react-keycloak/web';
import PrivateRoute from './components/PrivateRoute'; // Компонент для защищенных маршрутов
import LoginPage from './components/LoginPage';
import TaskList from './components/TaskList';

function App() {
  return (
    <ReactKeycloakProvider authClient={keycloak}>
      <Router>
        <Switch>
          <Route path="/login" component={LoginPage} />
          <PrivateRoute path="/tasks" component={TaskList} />
        </Switch>
      </Router>
    </ReactKeycloakProvider>
  );
}

export default App;
