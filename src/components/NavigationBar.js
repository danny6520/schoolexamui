import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import AddSchool from './AddSchool';
import AddClass from './AddClass';
import AddSubject from './AddSubject';

function NavigationBar() {
  return (
    <Router>
       <React.Fragment>
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#">OnlineExam</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          
          <Nav.Link as={Link} to={"/addschool"}>Add School</Nav.Link>
          <Nav.Link as={Link} to={"/addclass"}>Add Class</Nav.Link>
          <Nav.Link as={Link} to={"/addsubject"}>Add Subject</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    
   
        <Routes>
        <Route path="/addschool">
            <AddSchool />
        </Route>
        <Route path="/addclass">
            <AddClass />
        </Route>
        <Route path="/addsubject">
            <AddSubject />
        </Route>
        </Routes>
        </React.Fragment>
    </Router>
  );
}

export default NavigationBar;