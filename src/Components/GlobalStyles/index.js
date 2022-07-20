import PropTypes from 'prop-types';
import './GlobalStyles.scss';

function GlobalStyles({ children }) {
    return children;
}

GlobalStyles.propTypes = {
    children: PropTypes.object,
};

export default GlobalStyles;
