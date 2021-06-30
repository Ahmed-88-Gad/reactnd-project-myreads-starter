import React, { Component } from 'react';

class BookShelfChanger extends Component {
  state = {
    value: this.props.bookShelf
  }
  handleChange = event => {
    const { value } = event.target;
    this.setState({ value });
    this.props.ChangShelf(this.props.books, value);

  };

  render() {
    // const { books } = this.props
    // console.log('books', books.shelf);
    // console.log(this.state.value);
    // console.log(this.props.ChangShelf);
    // console.log(this.handleChange);
    console.log(this.props);
    console.log(this.state.value);

    // console.log(shelfTitle);
    return (
      <div className="book-shelf-changer">
        <select
          value={this.state.value}
          onChange={this.handleChange}
        >
          <option value="move" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}
//{e => handleChange(books, e.target.value)}
export default BookShelfChanger;