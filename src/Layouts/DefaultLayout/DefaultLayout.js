import PropTypes from 'prop-types';
import Header from '../Components/Header';
import styles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';
import Footer from '../Components/Footer';
const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('container')}>
            <Header />
            <div className={cx('content')}>{children}</div>
            <Footer />
        </div>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
