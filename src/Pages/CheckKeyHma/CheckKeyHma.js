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
    const [copyerror, setCopyError] = useState('copy');
    const [copysuccess, setCopySuccess] = useState('copy');
    const [valueerror, setValueError] = useState('');
    // const a = document.getElementById('error-textarea');
    // a.value = 'aaaaaaaaaaaaaaaa';
    const _handlCopyErrorValue = () => {
        if (copyerror === 'copy') {
            const value = document.getElementById('error-textarea');
            navigator.clipboard.writeText(value.value);
            setCopyError('copied');
            setTimeout(() => {
                setCopyError('copy');
            }, 3000);
        }
    };
    const _handlCopySuccessValue = () => {
        if (copysuccess === 'copy') {
            const value = document.getElementById('success-textarea');
            navigator.clipboard.writeText(value.value);
            setCopySuccess('copied');
            setTimeout(() => {
                setCopySuccess('copy');
            }, 3000);
        }
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
                        <div className={cx('element-total')}>
                            <div className={cx('process')}>
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
                                        <button type="submit" className={cx('check-btn')} disabled={!verfied}>
                                            Check Key
                                        </button>
                                        {background && <div className={cx('effect-background')} />}
                                    </div>
                                </UseContext.Provider>
                            </div>
                            <div className={cx('result-textarea')}>
                                <h5>Key Live</h5>
                                <div style={{ position: 'relative' }}>
                                    <div className={cx('success')}>
                                        <textarea
                                            className={cx('success-textarea')}
                                            id="success-textarea"
                                            placeholder="..."
                                            readOnly="readonly"
                                        ></textarea>
                                    </div>
                                    <button
                                        className={cx('copy-btn', 'copy-success-value')}
                                        onClick={_handlCopySuccessValue}
                                    >
                                        {copysuccess}
                                    </button>
                                </div>
                                <h5>Key Die</h5>
                                <div style={{ position: 'relative' }}>
                                    <div className={cx('error')}>
                                        <textarea
                                            className={cx('error-textarea')}
                                            placeholder="..."
                                            readOnly="readonly"
                                            onChange={(e) => setValueError(e)}
                                            id="error-textarea"
                                        >
                                            {valueerror}
                                        </textarea>
                                    </div>
                                    <button
                                        className={cx('copy-btn', 'copy-error-value')}
                                        id="copy-error-value"
                                        onClick={_handlCopyErrorValue}
                                    >
                                        {copyerror}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CheckKeyHma;
