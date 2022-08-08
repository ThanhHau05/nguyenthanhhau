import styles from './Image.module.scss';
import classNames from 'classnames/bind';
import { Images } from './Images';
import { useState } from 'react';
const cx = classNames.bind(styles);

function Image({ src, alt, className }) {
    const [count, setCount] = useState('');
    const _handleError = () => {
        setCount(Images.NoImage);
    };
    return <img className={cx('wrapper', className)} src={count || src} alt={alt} onError={_handleError} />;
}

export default Image;
