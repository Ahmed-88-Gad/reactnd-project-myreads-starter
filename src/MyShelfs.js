import React, {Component} from 'react';
import * as BooksAPI from './BooksAPI'
import Shelfs from './Shelfs';

class MyShelfs extends Component {
  state = { 
    AllBooks: []
   }
  componentDidMount() {
    BooksAPI.getAll()
      .then(books => {
        this.setState({
          AllBooks: books
        })
    })
}
ChangShelf = (book,shelf) =>{
  BooksAPI.update(book,shelf)    
      if (shelf === 'none') {
      this.setState(currentState => ({
        AllBooks: currentState.AllBooks.filter(b => b.id !== book.id)
      }));
    } 
    else {
      book.shelf = shelf;
      this.setState(currentState => ({
        AllBooks: currentState.AllBooks.filter(b => b.id !== book.id).concat(book)
      }));
    }
    
}
  render() { 

    const {AllBooks} = this.state
    // console.log(AllBooks);
    let CurrentlyReadingList = [];
    let WantToReadList = [];
    let ReadList = [];

    AllBooks.forEach(book => {
      switch(book.shelf) {
          case 'currentlyReading':
            CurrentlyReadingList.push(book)
              break
          case 'wantToRead':
            WantToReadList.push(book)
              break
          case 'read':
            ReadList.push(book)
              break
          default:
              break
      }
  })
  // console.log(CurrentlyReadingList);
  // console.log(WantToReadList);
  // console.log(ReadList);
    const myShelfs = [
      {
          shelfId: 'CurrentlyReading',
          shelfTitle: 'Currently Reading',
          booksInShelf : CurrentlyReadingList
      },
      {
          shelfId: 'WantToRead',
          shelfTitle: 'Want To Read',
          booksInShelf : WantToReadList
      },
      {
          shelfId: 'Read',
          shelfTitle: 'Read',
          booksInShelf : ReadList
      }
  ]
    return ( 
      <div className="list-books-content">
        <ol className='myshelfs'>
          {myShelfs.map((shelf)=>(
          <li key={shelf.shelfId}>
            <Shelfs 
              shelf = {shelf}
              shelfTitle={shelf.shelfTitle}
              booksInShelf={shelf.booksInShelf}
              shelfId={shelf.shelfId}
              AllBooks={AllBooks}
              ChangShelf={this.ChangShelf}
            
            />
          </li>
          ))}
        </ol>
    </div>
        )}
  }
export default MyShelfs;