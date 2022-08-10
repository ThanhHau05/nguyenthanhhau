import styles from './Notification.module.scss';
import classNames from 'classnames/bind';
import { MdOutlineNotificationsActive } from 'react-icons/md';
const cx = classNames.bind(styles);

function Notification() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('notification-container')}>
                    <h2>Thông báo</h2>
                    <div className={cx('notification-line')}>
                        <span></span>
                    </div>
                    <div className={cx('notification-content')}>
                        <MdOutlineNotificationsActive className={cx('notification-icon')} />
                        <div className={cx('notification')}>
                            <p>Chưa có thông báo mới!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Notification;
