import React, { Component } from "react";
import { Bars } from 'react-loader-spinner';
import css from 'components/Loader/Loader.module.css';

export class Loader extends Component {
  render() {
    return (
      <div className={css.loader}>
      <Bars 
  height="180"
  width="180"
  color="#4fa94d"
  ariaLabel="bars-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
        />
      </div>);
  }
}

