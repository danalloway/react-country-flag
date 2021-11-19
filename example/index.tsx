import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { countries } from './countries';
import { ReactCountryFlag } from '../src';

const App = () => {
  return (
    <div>
      <h1>Emoji's</h1>
      <div style={{ display: 'flex', flexFlow: 'row wrap' }}>
        {countries.map(country => (
          <ReactCountryFlag
            alt={country.iso2_cc}
            countryCode={country.iso2_cc}
            key={`${country.iso2_cc}_${country.e164_cc}_emoji`}
            style={{
              fontSize: '3em',
            }}
          />
        ))}
      </div>
      <br />
      <hr />
      <h1>SVG's</h1>
      <div style={{ display: 'flex', flexFlow: 'row wrap' }}>
        {countries.map(country => (
          <ReactCountryFlag
            alt={country.iso2_cc}
            countryCode={country.iso2_cc}
            key={`${country.iso2_cc}_${country.e164_cc}_emoji`}
            svg
            style={{
              width: '3em',
              height: '3em',
            }}
          />
        ))}
      </div>
      <br />
      <hr />
      <ReactCountryFlag alt="USA" countryCode="us" /> U.S.A
      <br />
      <ReactCountryFlag alt="USA" countryCode="us" svg /> U.S.A
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
