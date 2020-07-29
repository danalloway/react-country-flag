import React from 'react'

const DEFAULT_CDN_URL =
    'https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/4x3/'
const DEFAULT_CDN_SUFFIX = 'svg'

// offset between uppercase ascii and regional indicator symbols
const OFFSET = 127397

type Props = {
    cdnSuffix?: string
    cdnUrl?: string
    countryCode: string
    svg?: boolean
    style?: React.CSSProperties
}

const ReactCountryFlag: React.StatelessComponent<Props> = ({
    cdnSuffix,
    cdnUrl = DEFAULT_CDN_URL,
    countryCode,
    style,
    svg = false,
    ...props
}) => {
    if (typeof countryCode !== 'string') {
        return null
    }

    if (svg) {
        const flagUrl = `${cdnUrl}${countryCode.toLowerCase()}.${DEFAULT_CDN_SUFFIX}`

        return (
            <img
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

export default ReactCountryFlag
