import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import emojiSupport from 'detect-emoji-support';

class ReactCountryFlag extends PureComponent {
    render() {
        const { code, svg, flagWidth, flagHeight, flagFontSize } = this.props;

        return emojiSupport() && !svg
            ? <span
                  style={{
                      verticalAlign: 'middle'
                  }}
              >
                  {code
                      .toUpperCase()
                      .replace(/./g, char =>
                          String.fromCodePoint(char.charCodeAt(0) + 127397)
                      )}
              </span>
            : <span
                  style={{
                      position: 'relative',
                      display: 'inline-block',
                      width: flagWidth || '1.3333333333em',
                      height: flagHeight || '1em',
                      backgroundImage: `url('https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/2.8.0/flags/4x3/${code.toLowerCase()}.svg')`,
                      backgroundPosition: '50%',
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: 'contain',
                      fontSize: flagFontSize || '1em',
                      lineHeight: '1em',
                      verticalAlign: 'middle'
                  }}
              />;
    }
}

ReactCountryFlag.propTypes = {
    code: PropTypes.string.isRequired,
    svg: PropTypes.bool.isRequired
};

ReactCountryFlag.defaultProps = {
    svg: false
};

export default ReactCountryFlag;
