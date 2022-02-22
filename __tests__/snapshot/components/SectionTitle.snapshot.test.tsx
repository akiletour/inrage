import { render } from '@testing-library/react';

import SectionTitle from '@component/SectionTitle';

it('renders SectionTitle unchanged', () => {
  const { container } = render(<SectionTitle title="Hello" content="World" />);
  expect(container).toMatchSnapshot();
});
