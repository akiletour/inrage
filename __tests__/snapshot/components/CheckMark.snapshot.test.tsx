import { render } from '@testing-library/react';

import CheckMark from '@component/CheckMark';

it('renders CheckMark unchanged', () => {
  const { container } = render(<CheckMark>Hello</CheckMark>);
  expect(container).toMatchSnapshot();
});
