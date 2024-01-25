import './App.css';
import { useState } from 'react';
import { Routes, Route, Switch } from 'react-router-dom';

import Login from './pages/Login/Login';
import Main from './pages/Main/Main';

import dummyUsers from './dummyUsers';

function App() {
  const [users, setUsers] = useState(dummyUsers);
  const [isLogin, setIsLogin] = useState(false);
  
  function handleLogin() {
    setIsLogin(true);
  }
  return (
    <div className="App">
      <Routes>
        <Route
          path="/login"
          element={
            <Login 
              users={users}
              isLogin={isLogin}
              onLogin={handleLogin}
            />
          }
        />
        <Route 
          path="/user/:userId"
          element={
            <Main 
              users={users}
            />
          }
        />
      </Routes>

    </div>
  );
}

export default App;
