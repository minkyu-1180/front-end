import logo from './logo.svg';
import './App.css';

import { useState } from 'react';
import { Routes, Route, Link, NavLink, useNavigate } from 'react-router-dom';

// import Login from './pages/LoginPage/Login.js';
import LoginForm from './pages/LoginPage/LoginForm.js';
import AfterLogin from './pages/AfterLoginPage/AfterLogin.js';
import Navbar from './components/Navbar/Navbar.js';
import dummyUsers from './dummyUsers.js';

function App() {
  let [users, setUsers] = useState(dummyUsers);
  let [isLogin, setIsLogin] = useState(false);

  function handleLoginSuccess () {
    setIsLogin(true);
  };

  return (
    <div className="App">
      <Navbar />
      {/* <LoginForm 
        onLogin={handleLoginSuccess}
      /> */}

      <Routes>
        <Route 
          path="/"
          element={
            <LoginForm 
              onLogin={handleLoginSuccess}
              users={users}
            />
          }
        />
        <Route 
          path="/user/:userId"
          element={
            <AfterLogin 
              users={users}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
