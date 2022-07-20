import styles from './Home.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function Home() {
    return <h2 className={cx('')}>Home Page</h2>;
}

export default Home;
