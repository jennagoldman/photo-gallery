import React from 'react';
import ImageList from './ImageList';
import images from './new-data';
import renderer from 'react-test-renderer';

it('ImageList renders correctly', () => {
  const tree = renderer
    .create(<ImageList image={images} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});