import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {

    render() {
        return(
            <nav className = "navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to = "/" className = "navbar-brand">Phones Book</Link>
                <div className = "collpase navbar-collapse">
                    <ul className = "navbar-nav mr-auto">
                    <li className="navbar-item">
                        <Link to="/" className="nav-link">Phone Book logs</Link>
                        </li>
                        <li className="navbar-item">
                        <Link to="/add" className="nav-link">Add contact details</Link>
                        </li>
                        <li className="navbar-item">
                        <Link to="/update" className="nav-link">Update contact details</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar