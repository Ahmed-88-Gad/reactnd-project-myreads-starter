import React, { Component } from 'react';
import BookShelfChanger from './BookShelfChanger';

class Book extends Component {
  state = {}
  render() {
    const { books, shelfId, shelfTitle,ChangShelf } = this.props;
    // console.log('books', books);
    return (

      <li>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 188,
                backgroundImage: `url(${
                  books.imageLinks
                    ? books.imageLinks.thumbnail
                    : 'icons/book-placeholder.svg'
                })`
              }}>
            </div>
            <BookShelfChanger 
              books={books}
              shelfId={shelfId}
              shelfTitle={shelfTitle}
              ChangShelf={ChangShelf}
            />
          </div>
          <div className="book-title">{books.title}</div>
          <div className="book-authors">{books.authors}</div>
        </div>
      </li>
    );
  }
}
//'url("http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api")'
export default Book;