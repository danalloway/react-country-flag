import React, { Component } from "react";
import PropTypes from "prop-types";

export default class ReactCountryFlag extends Component {
    static propTypes = {
        cdnUrl: PropTypes.string,
        className: PropTypes.string,
        code: PropTypes.string.isRequired,
        styleProps: PropTypes.object,
        svg: PropTypes.bool,
        title: PropTypes.string
    };

    static defaultProps = {
        cdnUrl:
            "https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.2.1/flags/4x3/",
        svg: false
    };

    render() {
        const { cdnUrl, className, code, styleProps, svg, title } = this.props;
        
       if (!code) {
            return null;
        }

        const flagUrl = `${cdnUrl}${code.toLowerCase()}.svg`;
        const emoji = code
            .toUpperCase()
            .replace(/./g, char =>
                String.fromCodePoint(char.charCodeAt(0) + 127397)
            );

        return svg ? (
            <span
                aria-label={code}
                className={className}
                role="img"
                style={{
                    position: "relative",
                    display: "inline-block",
                    width: "1.3333333333em",
                    height: "1em",
                    backgroundImage: `url(${flagUrl})`,
                    backgroundPosition: "50%",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                    fontSize: "1em",
                    lineHeight: "1em",
                    verticalAlign: "middle",
                    ...styleProps
                }}
                title={title === undefined || title === null ? code : title}
            />
        ) : (
            <span
                aria-label={code}
                className={className}
                role="img"
                style={{
                    verticalAlign: "middle",
                    ...styleProps
                }}
                title={code}
            >
                {emoji}
            </span>
        );
    }
}
