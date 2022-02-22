import { render } from '@testing-library/react';

import Quote from '@component/Quote';

it('renders Quote unchanged', () => {
  const { container } = render(<Quote message="Hello" />);
  expect(container).toMatchSnapshot();
});
