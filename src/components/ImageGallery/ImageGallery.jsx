import React, { Component } from "react";
import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";
import css from "./ImageGallery.module.css";

export class ImageGallery extends Component {
  render() {
    const { images } = this.props; 

    return (
      <ul className={css.gallery}>
        {images.map((image) => (
          <ImageGalleryItem 
            key={image.id} 
            webformatURL={image.webformatURL} 
            tags={image.tags}
            largeImageURL={image.largeImageURL}
          />
        ))}
      </ul>
    );
  }
}