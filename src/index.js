import React from 'react'
import PropTypes from 'prop-types'

const DEFAULT_CDN_URL =
    'https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/4x3/'
const DEFAULT_CDN_SUFFIX = 'svg'

// offset between uppercase ascii and regional indicator symbols
const OFFSET = 127397

function ReactCountryFlag({
    cdnSuffix,
    cdnUrl,
    countryCode,
    style,
    svg,
    ...props
}) {
    if (typeof countryCode !== 'string') {
        return null
    }

    if (svg) {
        const flagUrl = `${cdnUrl}${countryCode.toLowerCase()}.${DEFAULT_CDN_SUFFIX}`

        return (
            <img
                aria-label={countryCode}
                {...props}
                src={flagUrl}
                style={{
                    display: 'inline-block',
                    width: '1em',
                    height: '1em',
                    verticalAlign: 'middle',
                    ...style
                }}
            />
        )
    }

    const emoji = countryCode
        .toUpperCase()
        .replace(/./g, (char) =>
            String.fromCodePoint(char.charCodeAt(0) + OFFSET)
        )

    return (
        <span
            aria-label={countryCode}
            role="img"
            {...props}
            style={{
                display: 'inline-block',
                fontSize: '1em',
                lineHeight: '1em',
                verticalAlign: 'middle',
                ...style
            }}
        >
            {emoji}
        </span>
    )
}

ReactCountryFlag.propTypes = {
    cdnUrl: PropTypes.string,
    countryCode: PropTypes.string.isRequired,
    style: PropTypes.object,
    svg: PropTypes.bool
}

ReactCountryFlag.defaultProps = {
    cdnUrl: DEFAULT_CDN_URL,
    svg: false
}

export default ReactCountryFlag
