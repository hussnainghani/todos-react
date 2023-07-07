import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Todos from '../pages/todo';

function Routeing() {
    return (
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Todos/>} />
          </Routes>
        </div>
      </Router>
    );
  }
  
  export default Routeing;