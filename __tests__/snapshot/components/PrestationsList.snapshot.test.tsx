import { render } from '@testing-library/react';

import PrestationsList from '@component/PrestationsList';

it('renders PrestationsList unchanged', () => {
  const { container } = render(<PrestationsList />);
  expect(container).toMatchSnapshot();
});
