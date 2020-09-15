import React from 'react';
import { cleanup, render } from '@testing-library/react';

import App from './app';

describe('App', () => {
  beforeEach(() => {
    global['fetch'] = jest.fn().mockResolvedValueOnce({
      json() {
        return [
          {
            "title": "Todo 1"
          },
          {
            "title": "Todo 2"
          }
        ]
      }
    });
    
  });
  afterEach(() => {
    delete global['fetch'];
    cleanup();
  });

  it('should render successfully', () => {
    const { baseElement } = render(<App />);

    expect(baseElement).toBeTruthy();
  });

  it('should have a greeting as the title', () => {
    const { getByText } = render(<App />);

    expect(getByText('Welcome to todos!')).toBeTruthy();
  });
});
