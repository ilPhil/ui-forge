import React from 'react';
import TestComponent from './TestComponent';

export default {
  title: 'TestComponent',
};

export const Primary: React.FC = () => <TestComponent color="yellow" />;
export const Secondary: React.FC = () => <TestComponent color="green" />;
