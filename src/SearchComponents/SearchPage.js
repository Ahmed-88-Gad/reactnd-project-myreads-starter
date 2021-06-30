import React, { Component } from 'react';
import * as BooksAPI from '../CommonComponents/BooksAPI'
import SearchBar from './SearchBar';
import SearchResult from './SearchResult';
class SearchPage extends Component {
  state = {
    searchedBooks: [],
  }
  handleSearching = (event) => {
    const query = event.target.value;
    if (query)
      BooksAPI.search(query)
        .then(books => {
          this.setState({ searchedBooks: books })
    })
  }


  render() {
    const searchedBooks = this.state.searchedBooks;
    const {ChangShelf}= this.props
    // console.log(searchedBooks);
    return (
      <div className="search-books">
        <SearchBar
          onSearching={this.handleSearching} />
        <SearchResult 
        searchedBooks={searchedBooks}
        AllMyBooks={this.props.AllMyBooks}
        ChangShelf={ChangShelf}
        />
      </div>
    );
  }
}

export default SearchPage;