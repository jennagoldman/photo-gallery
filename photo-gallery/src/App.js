import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import ImageList from './ImageList';
import images from './new-data';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ImageList images={images} />
      </div>
    );
  }
}