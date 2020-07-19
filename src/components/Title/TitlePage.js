import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import css from './TitlePage.module.css';

class TitlePage extends Component {
  state = {};
  render() {
    return (
      <Loader
        className={css.louder}
        type="ThreeDots"
        color="#EEDB00"
        height={100}
        width={100}
        timeout={3000000}
      />
    );
  }
}

export default TitlePage;
