import { useState } from 'react';
import './App.css';
import About from './components/About';
import { Form } from './components/Form';
import Navbar from './components/Navbar.js'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
function App() {
  const [Mode, setMode] = useState('light')
  const toggleMode = () => {
    if (Mode === 'light') {
      setMode("dark")
      document.body.style.backgroundColor = '#212529'
      document.body.style.color = 'white'
    }
    else {
      document.body.style.backgroundColor = 'white'
      document.body.style.color = '#212529'
      setMode("light")
    }
  }
  return (
    <>
      <Router>
        <Navbar title="To-Do List" mode={Mode} ToggleMode={toggleMode} />
        <Routes>
          <Route path='/' element={<Form heading="Enter the Task here" mode={Mode} />}>
          </Route>
          <Route path='/About' element={<About mode={Mode} />}>
          </Route>

        </Routes>
      </Router>
    </>
  );
}
export default App;


