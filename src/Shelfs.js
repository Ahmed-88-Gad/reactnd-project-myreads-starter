import React, { Component } from 'react';
import Book from './Book';

class Shelfs extends Component {
  state = {}
  render() {
    const { shelfId, shelfTitle, booksInShelf, ChangShelf } = this.props;
    // console.log(booksInShelf);
    // const BookDist = booksInShelf.filter((book) => book.shelf === shelf.shelfId)
    // console.log('BookDist',BookDist);
    return (

      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">{shelfTitle}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">{
              booksInShelf.map((books)=>(
              <Book 
                key={books.id} 
                books={books} 
                shelfId={shelfId} 
                shelfTitle={shelfTitle}
                ChangShelf={ChangShelf}              
              />
              ))}
            </ol>
          </div>
        </div>
      </div>
    );
  }
}

export default Shelfs;