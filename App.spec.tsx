import 'react-native';

import React from 'react';
import {render} from '@testing-library/react-native';

import App from './App';

jest.useFakeTimers();

describe('renders correctly', () => {
  it('Render APP', () => {
    render(<App />);
  });
});
