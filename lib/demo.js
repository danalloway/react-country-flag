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
            {Object.keys(demoData).map(code => (
                <span key={`${code}_emoji`}>
                    <ReactCountryFlag code={code} />
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
            {Object.keys(demoData).map(code => (
                <span key={`${code}_svg`}>
                    <ReactCountryFlag svg code={code} />
                    &nbsp;
                </span>
            ))}
        </div>
    </div>,
    document.getElementById('root')
);
