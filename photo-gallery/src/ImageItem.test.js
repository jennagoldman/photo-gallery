import React from 'react';
import ImageItem from './ImageItem';
import images from './new-data';
import renderer from 'react-test-renderer';

it('ImageItem renders correctly', () => {
  const tree = renderer
    .create(<ImageItem img={images} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});