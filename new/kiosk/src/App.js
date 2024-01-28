import './App.css';

// react-router-dom
import { Routes, Route } from 'react-router-dom';

import Home from './HomePage';
import Login from './LoginPage';
import Select from './SelectPage';
import Reservation from './ReservationPage';
import Routine from './RoutinePage';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/select" element={<Select />}/>
        <Route path="reservation" element={<Reservation />}/>
        <Route path="routine" element={<Routine />}/>
      </Routes>
    </div>
  );
}

export default App;
