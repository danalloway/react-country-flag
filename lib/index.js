import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import emojiSupport from 'detect-emoji-support';
import { flag } from 'country-emoji';

class ReactCountryFlag extends PureComponent {
    render() {
        const { code, svg } = this.props;

        return emojiSupport() && !svg
            ? <span>{flag(code)}</span>
            : <span
                  style={{
                      position: 'relative',
                      display: 'inline-block',
                      width: '1.3333333333em',
                      height: '1em',
                      backgroundImage: `url('https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/2.8.0/flags/4x3/${code.toLowerCase()}.svg')`,
                      backgroundPosition: '50%',
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: 'contain',
                      fontSize: '1em',
                      lineHeight: '1em'
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
}

export default ReactCountryFlag;
