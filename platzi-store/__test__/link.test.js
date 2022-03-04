import renderer, { act } from 'react-test-renderer';
import React from 'react';
import Link from '../src/Link';

test('Link changes the class when hovered', () => {
  const component = renderer.create(
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <Link page="http://www.facebook.com">Facebook</Link>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  act(() => {
    tree.props.onMouseEnter();
  });
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  act(() => {
    tree.props.onMouseLeave();
  });
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
