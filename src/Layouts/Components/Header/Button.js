import classNames from 'classnames/bind';
import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
const cx = classNames.bind(styles);
function ButtonHeader({ data, isHighLight, Selected }) {
    const _handleHeaderActive = (value) => {
        Selected(value);
    };
    const classes = useMemo(() => {
        if (isHighLight) {
            return 'active';
        }
    }, [isHighLight]);
    return (
        <Link to={data.to} className={cx(classes)} onClick={() => _handleHeaderActive(data.title)}>
            <button>{data.title}</button>
        </Link>
    );
}

export default ButtonHeader;
