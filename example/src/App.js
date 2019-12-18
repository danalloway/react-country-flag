import React, { Component } from 'react'

import ReactCountryFlag from 'react-country-flag'

import countryData from './country-data'

function App() {
    return (
        <div>
            <h1>Emoji's</h1>
            <div style={{ display: 'flex', flexFlow: 'row wrap' }}>
                {countryData.map((country) => (
                    <ReactCountryFlag
                        countryCode={country.iso2_cc}
                        key={`${country.iso2_cc}_${country.e164_cc}_emoji`}
                        style={{
                            fontSize: '3em'
                        }}
                    />
                ))}
            </div>
            <br />
            <hr />
            <h1>SVG's</h1>
            <div style={{ display: 'flex', flexFlow: 'row wrap' }}>
                {countryData.map((country) => (
                    <ReactCountryFlag
                        countryCode={country.iso2_cc}
                        key={`${country.iso2_cc}_${country.e164_cc}_emoji`}
                        svg
                        style={{
                            width: '3em',
                            height: '3em'
                        }}
                    />
                ))}
            </div>
            <br />
            <hr />
            <ReactCountryFlag countryCode="us" /> U.S.A
            <br />
            <ReactCountryFlag countryCode="us" svg /> U.S.A
        </div>
    )
}

export default App
