# react-country-flag

> React component for emoji/svg country flags.

[![NPM](https://img.shields.io/npm/v/react-country-flag.svg)](https://www.npmjs.com/package/react-country-flag)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-country-flag
```

## Usage

All props are passed onto the element, everything can be overwritten.

```jsx
import React from "react"
import ReactCountryFlag from "react-country-flag"

function ExampleComponent {
    return (
        <div>
            <ReactCountryFlag code="US" />
            <ReactCountryFlag
                className="emojiFlag"
                code="US"
                style={{
                    fontSize: '2em',
                    lineHeight: '2em',
                }}
                aria-label="United States"
            />

            <ReactCountryFlag code="US" svg />
            <ReactCountryFlag
                code="US"
                svg
                style={{
                    width: '2em',
                    height: '2em',
                }}
                title="US"
            />

            <ReactCountryFlag
                code="US"
                svg
                cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
                cdnSuffix="svg"
                title="US"
            />
        </div>
    )
}

export default ExampleComponent
```

## License

MIT © [danalloway](https://github.com/danalloway)
