# react-country-flag

> React component for emoji/svg country flags.

[![NPM](https://img.shields.io/npm/v/react-country-flag.svg)](https://www.npmjs.com/package/react-country-flag) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-country-flag
```

## Usage

```jsx
import React, { Component } from "react";

import ReactCountryFlag from "react-country-flag";

class Example extends Component {
    render() {
        return (
            <div>
                <ReactCountryFlag code="us" />
                <ReactCountryFlag code="us" svg />
                <ReactCountryFlag 
                    styleProps={{
                        width: '20px',
                        height: '20px'
                    }}
                    code="us"
                    svg
                />
            </div>
        );
    }
}
```

## License

MIT © [danalloway](https://github.com/danalloway)
