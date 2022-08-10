import styles from './CheckKeyHma.module.scss';
import classNames from 'classnames/bind';
import Notification from '~/Components/Notification/Notification';
import Captcha from '~/Components/Captcha';
import { BiCheck } from 'react-icons/bi';
import { createContext, useState } from 'react';
const cx = classNames.bind(styles);

export const UseContext = createContext();
function CheckKeyHma() {
    const [verfied, setVerfied] = useState(false);
    const [background, setBackground] = useState(false);
    const _handlA = () => {
        console.log('a');
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <Notification />
                <div className={cx('process-container')}>
                    <div className={cx('container-content')}>
                        <h2>Check Key HMA</h2>
                        <div className={cx('process-note')}>
                            <span>Nhập danh sách chứa key:</span>
                            <span>Lưu ý: mỗi key 1 dòng</span>
                        </div>
                        <textarea
                            className={cx('process-textarea')}
                            placeholder="AAAAAA-BBBBBB-CCCCCC
DDDDDD-EEEEEE-FFFFFF
..."
                            rows="25"
                        ></textarea>
                        <UseContext.Provider value={{ setBackground, setVerfied }}>
                            {!verfied ? (
                                <Captcha isHighLight={background} />
                            ) : (
                                <div className={cx('element-checked')}>
                                    <BiCheck className={cx('checked-icon')} />
                                    <h5>Đã xác minh</h5>
                                </div>
                            )}
                            <div className={cx('elementor-check')}>
                                <button type="submit" className={cx('check-btn')} disabled={!verfied} onClick={_handlA}>
                                    Check Key
                                </button>
                                {background && <div className={cx('effect-background')} />}
                            </div>
                        </UseContext.Provider>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CheckKeyHma;
