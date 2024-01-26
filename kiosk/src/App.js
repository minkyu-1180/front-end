import './App.css';
// react-router-dom
import { Routes, Route } from 'react-router-dom';

// Pages & Components 
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import Select from './pages/Select/Select';
import Reservation from './pages/Reservation/Reservation';
import ExercisePart from './pages/ExercisePart/ExercisePart';
function App() {

  return (
    <div className="App">
      <Routes>
        {/* beforeLogin */}
        <Route 
          path="/"
          element={<Main/>}
        />
        {/* login route */}
        <Route
          path="/login"
          element={<Login/>}
        />
        {/* user route (with params)*/}
        <Route 
          path="/user/:userId"
          element={<Select/>}
        />
        <Route 
          path="/reservation"
          element={<Reservation />}
        />

        <Route 
          path="/exercise-part"
          element={<ExercisePart />}
        />
      </Routes>

    </div>
  );
}

export default App;
