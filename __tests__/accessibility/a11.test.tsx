import React from 'react';

import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import WrapProvider from '__tests__/__utils__/WrapProvider';
import App from 'src/App';

expect.extend(toHaveNoViolations);

describe('Accessibility', () => {
  it('should demonstrate this matcher`s usage with react testing library', async () => {
    const { container } = render(
      <WrapProvider>
        <App />
      </WrapProvider>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
