import React from 'react'
import { Route } from 'react-router-dom'
import SearchPage from './SearchComponents/SearchPage';
// import MyShelfs from './MyShelfs';
import HomePage from './HomeComponents/HomePage';
import * as BooksAPI from './CommonComponents/BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    AllMyBooks:[]
  }
  componentDidMount() {
    BooksAPI.getAll()
      .then(books => {
        this.setState({
          AllMyBooks: books
        })
    })
}

ChangShelf = (book,shelf) =>{
  BooksAPI.update(book,shelf)    
      if (shelf === 'none') {
      this.setState(currentState => ({
        AllMyBooks: currentState.AllMyBooks.filter(b => b.id !== book.id)
      }));
    } 
    else {
      book.shelf = shelf;
      this.setState(currentState => ({
        AllMyBooks: currentState.AllMyBooks.filter(b => b.id !== book.id).concat(book)
      }));
    }
    
}

  render() {
    const{AllMyBooks}= this.state;
    const ChangShelf =this.ChangShelf
    // console.log(this.state.AllMyBooks);
    // console.log(AllMyBooks);
    return (
      <div className="app">
        <Route exact path = '/' render = {() => (
          <HomePage
            AllMyBooks={AllMyBooks}
            ChangShelf={this.ChangShelf}
            />
          )}
        />
        <Route exact path = '/search' render = {({history}) => (
          <SearchPage 
          AllMyBooks={AllMyBooks}
          ChangShelf={ChangShelf}
            />
          )}
        />
        
      </div>
    )
  }
}

export default BooksApp
