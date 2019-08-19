import React, { Component, memo } from "react";
import PropTypes from "prop-types";

function ReactCountryFlag({ cdnUrl, code, styleProps, svg, title }) {
    const flagUrl = `${cdnUrl}${code.toLowerCase()}.svg`;
    const emoji = code
        .toUpperCase()
        .replace(/./g, char =>
            String.fromCodePoint(char.charCodeAt(0) + 127397)
        );
    return svg ? (
        <span
            aria-label={code}
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
            title={title || code}
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
            {emoji}
        </span>
    );
}

ReactCountryFlag.propTypes = {
    cdnUrl: PropTypes.string,
    code: PropTypes.string.isRequired,
    styleProps: PropTypes.object,
    svg: PropTypes.bool,
    title: PropTypes.string
};

ReactCountryFlag.defaultProps = {
    cdnUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.3.0/flags/4x3/",
    svg: false
};

export default memo(ReactCountryFlag);
