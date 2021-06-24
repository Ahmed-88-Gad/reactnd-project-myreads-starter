import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class SearchBar extends Component {
  state = {  }
  render() { 
    return ( 
      <div className="search-books-bar">
      <Link to='/' className="close-search">Close</Link>
      <div className="search-books-input-wrapper">
        <input type="text" placeholder="Search by title or author"/>
      </div>
    </div>
     );
  }
}
 
export default SearchBar;