import React, { Component } from "react";

import ReactCountryFlag from "react-country-flag";
import countryData from "./country-data";

export default class App extends Component {
    render() {
        return (
            <div>
                <h1>Emoji's</h1>
                <div style={{ display: "flex", flexFlow: "row wrap" }}>
                    {countryData.map(country => (
                        <span
                            key={`${country.iso2_cc}_${country.e164_cc}_emoji`}
                        >
                            <ReactCountryFlag
                                code={country.iso2_cc}
                                flagProps={{ fontSize: "4rem" }}
                            />
                            &nbsp;
                        </span>
                    ))}
                </div>
                <hr />
                <h1>SVG's</h1>
                <div style={{ display: "flex", flexFlow: "row wrap" }}>
                    {countryData.map(country => (
                        <span key={`${country.iso2_cc}_${country.e164_cc}_svg`}>
                            <ReactCountryFlag
                                code={country.iso2_cc}
                                svg
                                flagProps={{ width: "4rem", height: "3rem" }}
                            />
                            &nbsp;
                        </span>
                    ))}
                </div>
            </div>
        );
    }
}
