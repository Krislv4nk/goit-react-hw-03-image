import React, { Component } from 'react';

// export class ImageGalleryItem extends Component {
//   handleClick = () => {
//     this.props.onOpen(this.props.largeImageURL);
//   };
//   render() {
//     const { id, webformatURL, tags } = this.props;

//     return (
//       <li className="ImageGalleryItem" onClick={this.handleClick} >
//         <img
//           className="imageItem"
//           src={webformatURL}
//           alt={tags}
//           id={id}
//         />
//       </li>
//     );
//   }
// }

export class ImageGalleryItem extends Component {
  handleClick = () => {
    this.props.onOpen(this.props.largeImageURL);
  };
  render() {
    const { id, webformatURL, tags } = this.props;

    return (
      <li className="ImageGalleryItem" onClick={this.handleClick} >
        <img
          className="imageItem"
          src={webformatURL}
          alt={tags}
          id={id}
        />
      </li>
    );
  }
}