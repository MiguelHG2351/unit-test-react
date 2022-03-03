import Link from '../src/Link';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(<Link page={"https://www.facebook.com"} />).toJSON();
  expect(tree).toMatchSnapshot();
});
