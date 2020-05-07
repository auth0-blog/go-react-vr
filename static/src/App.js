import React from 'react';
import './App.css';
import Home from './components/Home.js';
import LoggedIn from './components/LoggedIn.js';
import { useAuth0 } from "./react-auth0-spa";

const App = () => {
  const { isAuthenticated } = useAuth0();

  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      {!isAuthenticated && (
        <Home />
      )}

      {isAuthenticated && <LoggedIn />}
    </div>
  );
};

export default App;