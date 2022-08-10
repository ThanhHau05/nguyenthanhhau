import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import ReactTyped from 'react-typed';
const cx = classNames.bind(styles);
function Home() {
    return (
        <div classNames={cx('home')}>
            <div className={cx('container')}>
                <div className={cx('content-text')}>
                    <span className={cx('text-typed')}>
                        <ReactTyped
                            strings={['Chào mừng bạn đến trang web của tui!', '...']}
                            typeSpeed={100}
                            backSpeed={70}
                            loop
                        />
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Home;
