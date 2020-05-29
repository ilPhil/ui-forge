import React from 'react';
import { render } from '@testing-library/react';

import TestComponent from './TestComponent';
import { TestComponentProps } from './TestComponent.types';

describe('Test Component', () => {
  let props: TestComponentProps;

  beforeEach(() => {
    props = {
      color: 'green',
    };
  });

  it('should have primary className with default props', () => {
    render(<TestComponent {...props} />);
  });
});
