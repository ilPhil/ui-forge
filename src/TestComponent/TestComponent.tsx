import React from 'react';
import styled from 'styled-components';

import { TestComponentProps } from './TestComponent.types';

const Button = styled.button`
  font-size: 14px;
  background-color: 'white';
  padding: 5px 10px;
  border-radius: 3px;
  color: ${(props) => props.color};
  border: 2px solid ${(props) => props.color};
`;

const TestComponent: React.FC<TestComponentProps> = ({ color = 'green' }: { color: string }) => (
  <Button className="test" color={color}>
    TEST
  </Button>
);

export default TestComponent;
