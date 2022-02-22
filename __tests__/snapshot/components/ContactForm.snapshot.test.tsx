import { render } from '@testing-library/react';

import ContactForm from '@component/ContactForm';

it('renders ContactForm unchanged', () => {
  const { container } = render(<ContactForm lg />);
  expect(container).toMatchSnapshot();
});
