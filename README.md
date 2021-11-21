# react-country-flag

> React component for emoji/svg country flags.

[![NPM](https://img.shields.io/npm/v/react-country-flag.svg)](https://www.npmjs.com/package/react-country-flag)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-country-flag
```

## BREAKING CHANGES

v3.x NONE
only Typescript Types were introduced, enjoy!


v2.x has breaking changes

- `code` is now `countryCode`
- `title` and `aria-label` are not defined any more, it is up to the developer
  to pass these in
- `styleProps` is now `style`

## Usage

All props are passed onto the element, everything can be overwritten.

```jsx
import React from "react"
import ReactCountryFlag from "react-country-flag"

function ExampleComponent {
    return (
        <div>
            <ReactCountryFlag countryCode="US" />

            <ReactCountryFlag
                className="emojiFlag"
                countryCode="US"
                style={{
                    fontSize: '2em',
                    lineHeight: '2em',
                }}
                aria-label="United States"
            />

            <ReactCountryFlag countryCode="US" svg />

            <ReactCountryFlag
                countryCode="US"
                svg
                style={{
                    width: '2em',
                    height: '2em',
                }}
                title="US"
            />

            <ReactCountryFlag
                countryCode="US"
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

# Detecting Emoji support

Try this out and conditionally render your country flag
https://github.com/danalloway/detect-emoji-support

## License

MIT © [danalloway](https://github.com/danalloway)
