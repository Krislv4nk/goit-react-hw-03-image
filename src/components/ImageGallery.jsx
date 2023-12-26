import React, { Component } from "react";
import { ImageGalleryItem } from "./ImageGalleryItem";

export class ImageGallery extends Component {
  render() {
    const { images } = this.props; 

    return (
      <ul className="gallery">
        {images.map((image) => (
          <ImageGalleryItem key={image.id}>
            <img src={image.webformatURL} alt={image.tags} />
          </ImageGalleryItem>
        ))}
      </ul>
    );
  }
}