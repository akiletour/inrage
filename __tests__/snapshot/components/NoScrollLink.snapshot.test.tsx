import { render } from '@testing-library/react';

import NoScrollLink from '@component/NoScrollLink';

it('renders NoScrollLink unchanged', () => {
  const { container } = render(<NoScrollLink href="/">Hello</NoScrollLink>);
  expect(container).toMatchSnapshot();
});
