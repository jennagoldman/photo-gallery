import React, { Component } from 'react';
import imagesData from './new-data';

export default class ImageItem extends Component {
    render() {
        return (
            <li className="image-container">
                <img src={this.props.img.url} alt={this.props.img.title} keyword={this.props.img.keyword} />
            </li>
        )
    }
}