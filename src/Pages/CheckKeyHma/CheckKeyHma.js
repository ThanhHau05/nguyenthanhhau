import styles from './CheckKeyHma.module.scss';
import classNames from 'classnames/bind';
import Notification from '~/Components/Notification/Notification';
import Captcha from '~/Components/Captcha';
import { BiCheck } from 'react-icons/bi';
import { createContext, useState } from 'react';
import ButtonServers from '~/Components/ButtonServers';
import RunServers from '~/Components/RunServers';
import axios from 'axios';
const cx = classNames.bind(styles);
const SERVERS = [
    {
        title: 'Servers 1',
    },
    {
        title: 'Servers 2.1',
    },
];

export const UseContext = createContext();
function CheckKeyHma() {
    const [verfied, setVerfied] = useState(false);
    const [valuehollow, setValueHollow] = useState(false);
    const [background, setBackground] = useState(false);
    const [backgroundspan, setBackgroundSpan] = useState(false);
    const [copyerror, setCopyError] = useState('copy');
    const [copysuccess, setCopySuccess] = useState('copy');
    const [servers, setServers] = useState('Servers 1');
    const [btnsvbkg, setBtnSVBkg] = useState('');
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
    const _handleCheckKey = async () => {
        if (document.getElementById('process-textarea').value.length === 0) {
            return setValueHollow(true);
        }
        const value = document.getElementById('process-textarea').value.split('\n');
        const response = await axios.post(
            `https://my-win.avast.com/v1/query/get-exact-application-licenses`,
            `{"walletKeys":["${value[0]}"]}`,
            {
                headers: {
                    UserAgent: 'Avast Antivirus',
                    //Host: 'my-win.avast.com',
                    'Vaar-Version': '0',
                    'Vaar-Header-App-Build-Version': '6215',
                    'Vaar-Header-App-Id': '00000000-0000-0000-0000-000000000000',
                    'Vaar-Header-App-IPM-Product': '78',
                    'Vaar-Header-App-Product-Brand': 'PRIVAX',
                    'Vaar-Header-App-Product-Edition': 'HMA_VPN_CONSUMER',
                    'Vaar-Header-App-Product-Mode': 'PAID',
                    'Vaar-Header-Device-Id': '00000000000000000000000000000000c5b22bfb3a487ed1d76efdb75c75d731',
                    'Vaar-Header-Device-Platform': 'WIN',
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            },
        );
        console.log(response);
        // for (var i = 0; i < value.length; i++) {

        // }

        // const text = document.getElementById('process-textarea').value;
        // console.log(text.split('\n'));
        // console.log('a');
    };
    const _handleRenderServers = () => {
        return SERVERS.map((item, index) => (
            <ButtonServers
                key={index}
                data={item}
                isHighLight={servers === item.title}
                isHighLightBkg={btnsvbkg !== item.title && btnsvbkg !== ''}
                BtnSVActive={_handleButtonSVActive}
            />
        ));
    };
    const _handleButtonSVActive = (value) => {
        setValueHollow(false);
        setBackgroundSpan(true);
        setVerfied(false);
        setBtnSVBkg(value);
        setServers(value);
        const timer = setTimeout(() => {
            setBackgroundSpan(false);
            setBtnSVBkg('');
        }, 2000);
        return () => clearTimeout(timer);
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <Notification />
                <div className={cx('process-container')}>
                    <div className={cx('container-content')}>
                        <h2>Check Key HMA</h2>
                        <div className={cx('servers-list')}>{_handleRenderServers()}</div>
                        <div style={{ position: 'relative' }}>
                            {backgroundspan && <span className={cx('process-background')}></span>}
                            <div className={cx('process-note')}>
                                <span>Nhập danh sách chứa key:</span>
                                <span>Lưu ý: mỗi key 1 dòng</span>
                            </div>
                            <div className={cx('element-total')}>
                                <div className={cx('process')}>
                                    <textarea
                                        className={cx('process-textarea')}
                                        id="process-textarea"
                                        placeholder="AAAAAA-BBBBBB-CCCCCC
DDDDDD-EEEEEE-FFFFFF
..."
                                        rows="25"
                                        spellCheck={false}
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
                                        {valuehollow && (
                                            <div className={cx('textarea-value-hollow')}>
                                                <p>Không tìm thấy key nào, vui lòng nhập key vào để check</p>
                                            </div>
                                        )}
                                        <div className={cx('elementor-check')}>
                                            <button
                                                type="submit"
                                                className={cx('check-btn')}
                                                disabled={!verfied}
                                                onClick={_handleCheckKey}
                                            >
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
                                                spellCheck={false}
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
                                                id="error-textarea"
                                                spellCheck={false}
                                            ></textarea>
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
        </div>
    );
}

export default CheckKeyHma;
