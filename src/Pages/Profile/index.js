import styles from './Profile.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function Profile() {
    return <h2 className={cx('')}>Profile Page</h2>;
}

export default Profile;
