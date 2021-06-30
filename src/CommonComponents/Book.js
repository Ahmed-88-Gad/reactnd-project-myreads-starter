import React from 'react';
import BookShelfChanger from './BookShelfChanger';

const Book = ({ books, shelfId, shelfTitle, ChangShelf, bookShelf }) => (
// class Book extends Component {
  // state = {}
  // render() {
  //   const { books, shelfId, shelfTitle,ChangShelf, bgImg,searchedBooks } = this.props;
  //   console.log('books', books);
  //   const {bookThumbnail}=this.props.books
  //   console.log('bookThumbnail', bookThumbnail);
  //   // console.log('searchedBooks', searchedBooks);
  //   // console.log('books', books);
  //   // console.log('books.imageLinks', books.imageLinks);
  //   console.log('books.imageLinks', books.imageLinks);
// console.log(ChangShelf);
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
              bookShelf={bookShelf}
            />
          </div>
          <div className="book-title">{books.title}</div>
          <div className="book-authors">{books.authors}</div>
        </div>
      </li>
    );
  // }
// }
// `url(${
//   books.imageLinks
//   ? books.imageLinks.thumbnail
//   : 'icons/book-placeholder.svg'
// })`

//'url("http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api")'
export default Book;