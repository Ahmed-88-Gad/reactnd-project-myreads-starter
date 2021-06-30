import React, { Component } from 'react';
import * as BooksAPI from '../CommonComponents/BooksAPI'
import SearchBar from './SearchBar';
import SearchResult from './SearchResult';
import errorMsg from './errorMsg';
class SearchPage extends Component {
  state = {
    searchedBooks: [],
    error:''
  }
  handleSearching = (event) => {
    const query = event.target.value;
    if (query){
      BooksAPI.search(query)
        .then(books => {
          if(books.error==='empty query'){
            this.setState({error:errorMsg})
            this.setState({searchedBooks:[]})
          console.log('error');
          }

          else{
            this.setState({ searchedBooks: books })
            this.setState({error:''})

          }
          
    })}
    else{
      this.setState({ searchedBooks:[] })
      console.log(this.state.searchedBooks);
    }
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
          <div className="error">{this.state.error}</div>
      </div>
    );
  }
}

export default SearchPage;