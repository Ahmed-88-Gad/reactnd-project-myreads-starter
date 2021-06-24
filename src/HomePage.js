import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Header from './Header'
import MyShelfs from './MyShelfs';

class HomePage extends Component {
  state = {  }
  render() { 
    return ( 
      <div className="list-books">
        <Header />
        <MyShelfs />
        <div className="open-search">
          <Link to="/search"><button>Add  a book</button></Link>
        </div>
      </div>
     );
  }
}
 
export default HomePage;