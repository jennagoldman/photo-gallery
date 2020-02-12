import React, { Component } from 'react';
import images from './new-data';
import ImageItem from './ImageItem';


export default class ImageList extends Component {
    render() {
        const imageItems = images.map((image, i) => <ImageItem img={image} key={i} />);
            return (
                <ul className="image-list-container">
                    {imageItems}
                </ul>
        )
    }
}

