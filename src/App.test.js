import { render } from '@testing-library/react';

import App from './App';

test('rendering App page', () => {
  const container = render(<App />);
  expect(container).toMatchSnapshot();
});
