import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Navbar from './components/navbar.component';
import phoneBookLog from './components/phonelog.component';
import AddDetails from './components/addDetails.component';
import UpdateContact from './components/updatecontact.component';

function App() {
  return (
    <Router>
      <div className = "container">
        <Navbar />
        <br />
        <Route path = "/" exact component={phoneBookLog} />
        <Route path = "/add" component={AddDetails} />
        <Route path = "/update" component={UpdateContact} />
      </div>
    </Router>
  );
}

export default App;
