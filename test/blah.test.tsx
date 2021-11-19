import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ReactCountryFlag } from '../src';

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ReactCountryFlag countryCode="US" />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
