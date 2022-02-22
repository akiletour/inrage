import { render } from '@testing-library/react';

import Character from '@component/Character';

it('renders Character unchanged', () => {
  const { container } = render(<Character />);
  expect(container).toMatchSnapshot();
});
