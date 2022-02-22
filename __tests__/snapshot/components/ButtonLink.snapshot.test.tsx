import { render } from '@testing-library/react';

import ButtonLink from '@component/ButtonLink';

it('renders Button unchanged', () => {
  const { container } = render(<ButtonLink href="/">Hello Button</ButtonLink>);
  expect(container).toMatchSnapshot();
});
