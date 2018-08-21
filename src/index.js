import React, { Component } from "react";
import PropTypes from "prop-types";

export default class ReactCountryFlag extends Component {
    static propTypes = {
        cdnUrl: PropTypes.string,
        code: PropTypes.string.isRequired,
        styleProps: PropTypes.object,
        svg: PropTypes.bool
    };

    static defaultProps = {
        cdnUrl:
            "https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.1.0/flags/4x3/",
        svg: false
    };

    render() {
        const { cdnUrl, code, styleProps, svg } = this.props;

        return svg ? (
            <span
                aria-label={code}
                role="img"
                style={{
                    position: "relative",
                    display: "inline-block",
                    width: "1.3333333333em",
                    height: "1em",
                    backgroundImage: `url('${cdnUrl}${code.toLowerCase()}.svg')`,
                    backgroundPosition: "50%",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                    fontSize: "1em",
                    lineHeight: "1em",
                    verticalAlign: "middle",
                    ...styleProps
                }}
                title={code}
            />
        ) : (
            <span
                aria-label={code}
                role="img"
                style={{
                    verticalAlign: "middle",
                    ...styleProps
                }}
                title={code}
            >
                {code
                    .toUpperCase()
                    .replace(/./g, char =>
                        String.fromCodePoint(char.charCodeAt(0) + 127397)
                    )}
            </span>
        );
    }
}
