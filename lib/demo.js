import React from 'react';
import { render } from 'react-dom';

import demoData from './demoData';
import ReactCountryFlag from './';

render(
    <div>
        <h1>Emoji's</h1>
        <div style={{
            fontSize: '3rem',
            wordWrap: 'break-word'
        }}>
            {demoData.map(country => (
                <span key={`${country.iso2_cc}_${country.e164_cc}_emoji`}>
                    <ReactCountryFlag code={country.iso2_cc} />
                    &nbsp;
                </span>
            ))}
        </div>

        <hr />

        <h1>SVG's</h1>
        <div style={{
            fontSize: '3rem',
            wordWrap: 'break-word'
        }}>
            {demoData.map(country => (
                <span key={`${country.iso2_cc}_${country.e164_cc}_svg`}>
                    <ReactCountryFlag svg code={country.iso2_cc} />
                    &nbsp;
                </span>
            ))}
        </div>
    </div>,
    document.getElementById('root')
);
