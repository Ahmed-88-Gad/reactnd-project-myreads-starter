import React, {Component} from 'react';
// import * as BooksAPI from './BooksAPI'
import Shelfs from './Shelfs';

class MyShelfs extends Component {
  state = { 
    // AllMyBooks: this.props
  }
   render() { 

    const {AllMyBooks, ChangShelf} = this.props
    // console.log(AllMyBooks);
    let CurrentlyReadingList = [];
    let WantToReadList = [];
    let ReadList = [];

    AllMyBooks.forEach(book => {
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
              ChangShelf={ChangShelf}
            
            />
          </li>
          ))}
        </ol>
    </div>
        )}
  }
export default MyShelfs;