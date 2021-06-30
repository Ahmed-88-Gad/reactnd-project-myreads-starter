import React from 'react';
import Book from '../CommonComponents/Book';
const SearchResult = props => {
  const {searchedBooks, AllMyBooks,ChangShelf}=props
  const updatedSearchedBooks = searchedBooks.map(book => {
    AllMyBooks.map(b => {
      if (b.id === book.id) {
        book.shelf = b.shelf;
        // console.log(book.shelf);
        // console.log(b);
      }
      // console.log(b);
      return b;
    });
    // console.log(book);
    return book;
  });
      // console.log(updatedSearchedBooks);
  return ( 
          <div className="search-books-results">
      <ol className="books-grid">{
        updatedSearchedBooks.map((books) => (
          <Book
            key={books.id}
            books={books}
            bookTitle={books.title}
            ChangShelf={ChangShelf}
            bookShelf={books.shelf ? books.shelf : 'none'}
          />
        ))
      }
      </ol>
    </div>
   );
}
export default SearchResult;