import React, { Component } from 'react';
import ImageItem from './ImageItem';


export default class ImageList extends Component {
    render() {
        return (
            <ul className="image-list-container">
                {this.props.image.map((image, i) => <ImageItem img={image} key={i} />)};
            </ul>
        )
    }
}

