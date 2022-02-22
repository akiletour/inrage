import { render } from '@testing-library/react';

import TextImage from '@component/TextImage';

it('renders TextImage unchanged', () => {
  const { container } = render(
    <TextImage title="Hello" image="test">
      World
    </TextImage>
  );
  expect(container).toMatchSnapshot();
});
