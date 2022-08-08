import Config from '~/Config';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { FaConnectdevelop } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ButtonHeader from './Button';
import { useEffect, useState } from 'react';
const cx = classNames.bind(styles);
const ITEMS_HEADER = [
    {
        title: 'TRANG CHỦ',
        to: Config.routes.home,
    },
    {
        title: 'TOOLS & CÔNG CỤ',
        to: Config.routes.tools_va_cong_cu,
    },
];

function Header() {
    const [count, setCount] = useState();
    if (window.location.pathname === '/') {
        localStorage.removeItem('count_header');
    }
    useEffect(() => {
        const local = JSON.parse(localStorage.getItem('count_header'));
        setCount(local);
    }, []);
    const _handleRenderItems = () => {
        return ITEMS_HEADER.map((item, index) => (
            <ButtonHeader key={index} data={item} isHighLight={count === item.title} Selected={_handleHeaderActive} />
        ));
    };
    const _handleHeaderActive = (value) => {
        if (value !== 'TRANG CHỦ') {
            setCount(value);
            localStorage.setItem('count_header', JSON.stringify(value));
        } else {
            ReloadHome();
        }
    };
    const ReloadHome = () => {
        setCount('');
        localStorage.removeItem('count_header');
    };
    return (
        <div className={cx('header')}>
            <div className={cx('container')}>
                <Link to={Config.routes.home} onClick={ReloadHome}>
                    <FaConnectdevelop className={cx('logo-icon')} />
                </Link>
                <div className={cx('header-menu-items')}>{_handleRenderItems()}</div>
            </div>
        </div>
    );
}

export default Header;
