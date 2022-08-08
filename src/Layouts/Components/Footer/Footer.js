import styles from './Footer.module.scss';
import classNames from 'classnames/bind';
import { SiZalo } from 'react-icons/si';
const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('wrapper')}>
            <h2 className={cx('contact-title')}>Liên Hệ</h2>
            <span className={cx('contact-line')}></span>
            <a href="https://zalo.me/0826821468" target="_bank">
                <div className={cx('contact-zalo')}>
                    <div className={cx('contact-zalo-icon')}>
                        <SiZalo className={cx('zalo-icon')} />
                    </div>
                    <div className={cx('contact-zalo-content')}>
                        <h4>Zalo</h4>
                        <span>0826821468</span>
                    </div>
                </div>
            </a>
        </div>
    );
}

export default Footer;
