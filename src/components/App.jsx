import React, { Component } from "react";
import { SearchBar } from "./SearchBar";
import { ImageGallery } from './ImageGallery';
import { Loader } from './Loader';
import {LoadMoreButton} from './Button';
import { fetchGalleryItems } from 'Services/API';

export class App extends Component {
  state = {
    images: [],
    isLoading: false,
    page: 1,
    searchValue: '',
    per_page: 12,
  };

  handleSearchSubmit = async (searchValue) => {
    this.setState({ isLoading: true, searchValue });
    const images = await fetchGalleryItems(searchValue, this.state.page, this.state.per_page);
    this.setState({ images, isLoading: false, page: this.state.page + 1 });
  };

  handleLoadMore = async () => {
    this.setState({ isLoading: true });
    const images = await fetchGalleryItems(this.state.searchValue, this.state.page, this.state.per_page);
    this.setState({ images: [...this.state.images, ...images], isLoading: false, page: this.state.page + 1 });
  };

  render() {
    const { images, isLoading } = this.state;
    const imagesArray = Array.isArray(images) ? images : [];
    const isButtonVisible = imagesArray.length > 0;
    return (
      <div>
        <SearchBar onSubmit={this.handleSearchSubmit} />
        {isLoading ? <Loader /> : <ImageGallery images={imagesArray} />}
        {!isLoading && <LoadMoreButton onClick={this.handleLoadMore} isVisible={isButtonVisible} />}
      </div>
    );
  }
}

