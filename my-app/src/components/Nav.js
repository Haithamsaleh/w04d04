import React from 'react'
import {Link} from "react-router-dom";
import {IoChevronBackCircle }from 'react-icons/io5'
import { useHistory } from "react-router-dom";




function Nav() {
  const history = useHistory();
    
    
    return (
        <div className="nav">
               
        <nav>
          <ul>
            <li className="back " onClick={() => history.goBack()}> <IoChevronBackCircle /></li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/cards">Cards</Link>
            </li>
            <li>
              <Link to="/Fav">Fav</Link>
            </li>
          </ul>
        </nav>
        </div>
    )
}


export default Nav
