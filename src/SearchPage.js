import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
class SearchPage extends Component {
  state = {  }
  render() { 
    return ( 
        <div className="search-books">
          <SearchBar />
          <div className="search-books-results">
            <ol className="books-grid"></ol>
          </div>
        </div>
     );
  }
}
 
export default SearchPage;