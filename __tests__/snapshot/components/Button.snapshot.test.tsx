import { render } from '@testing-library/react';

import Button from '@component/Button';

it('renders Button unchanged', () => {
  const { container } = render(<Button>Hello Button</Button>);
  expect(container).toMatchSnapshot();
});

it('renders Button loading unchanged', () => {
  const { container } = render(<Button isLoading>Hello</Button>);
  expect(container).toMatchSnapshot();
});

it('renders Button submit unchanged', () => {
  const { container } = render(<Button submit>Hello Button</Button>);
  expect(container).toMatchSnapshot();
});

it('renders Button with class unchanged', () => {
  const { container } = render(<Button className="hello">Hello Button</Button>);
  expect(container).toMatchSnapshot();
});
