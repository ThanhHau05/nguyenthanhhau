import styles from './ButtonServers.module.scss';
import classNames from 'classnames/bind';
import { useMemo } from 'react';
const cx = classNames.bind(styles);

function ButtonServers({ data, isHighLight, isHighLightBkg, BtnSVActive }) {
    const classActive = useMemo(() => {
        if (isHighLight) {
            return 'servers-active';
        }
    }, [isHighLight]);
    const classBackground = useMemo(() => {
        if (isHighLightBkg) {
            return 'servers-background';
        }
    }, [isHighLightBkg]);
    const classBackgroundBtn = useMemo(() => {
        if (isHighLightBkg) {
            return 'servers-background-button';
        }
    }, [isHighLightBkg]);
    const _onClick = (event, value) => {
        if (event.target.classList.length === 1) {
            BtnSVActive(value);
        }
    };
    return (
        <div className={cx(classBackgroundBtn)}>
            <span className={cx(classBackground)}></span>
            <button className={cx('servers', classActive)} onClick={(e) => _onClick(e, data.title)}>
                {data.title}
            </button>
        </div>
    );
}

export default ButtonServers;
