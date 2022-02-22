import { render } from '@testing-library/react';

import Keypoints from '@component/Keypoints';

it('renders Keypoints unchanged', () => {
  const { container } = render(<Keypoints />);
  expect(container).toMatchSnapshot();
});
