import React, { Component } from "react";
import { ImageGalleryItem } from "./ImageGalleryItem";

// export class ImageGallery extends Component {
//   render() {
//     const { images } = this.props;

//     return (
//       <ul className="gallery">
//         {images.map((image) => (
//           <ImageGalleryItem
//             key={image.id}
//             webformatURL={image.webformatURL}
//             tags={image.tags}
//           />
//         ))}
//       </ul>
//     );
//   }
// }

export class ImageGallery extends Component {
  render() {
    const { images } = this.props; 

    return (
      <ul className="gallery">
        {images.map((image) => (
          <ImageGalleryItem 
            key={image.id} 
            webformatURL={image.webformatURL} 
            tags={image.tags}
            largeImageURL={image.largeImageURL} // Додаємо цей рядок
          />
        ))}
      </ul>
    );
  }
}