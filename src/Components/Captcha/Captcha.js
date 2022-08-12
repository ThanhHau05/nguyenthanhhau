import styles from './Captcha.module.scss';
import classNames from 'classnames/bind';
import { AiOutlineReload } from 'react-icons/ai';
import { useContext, useEffect, useRef, useState } from 'react';
import { UseContext } from '~/Pages/CheckKeyHma/CheckKeyHma';
const cx = classNames.bind(styles);
var text = '';

function Captcha({ isHighLight }) {
    const { setBackground, setVerfied } = useContext(UseContext);
    const [count, setCount] = useState('');
    const [valueverification, setValueVerification] = useState('Xác minh');
    const [classinput, setClassInput] = useState();
    const [classcolorinput, setClassColorInput] = useState();
    const [checkinput, setCheckInput] = useState(false);
    const [checkinput2, setCheckInput2] = useState(false);
    const inputRef = useRef();
    useEffect(() => {
        _handleRandomText();
    }, []);
    useEffect(() => {
        if (checkinput2) {
            if (count.trim().length === 0) {
                setClassColorInput('');
                setClassInput('');
                setCheckInput2(false);
            }
        }
    }, [checkinput2, count]);
    const _handleRandomText = () => {
        text = '';
        const characters = 'ABCDabcdEFGHefghIJKLijklMNOPmnopQRSTqrstUVWXuvwxYZyz';
        for (var i = 0; i < 2; i++) {
            text += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        for (var j = 0; j < 4; j++) {
            text += Math.floor(Math.random() * 10);
        }
        text = text
            .split('')
            .sort(function () {
                return 0.5 - Math.random();
            })
            .join('');
        var c = document.getElementById('canvas');
        var ctx = c.getContext('2d');
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.fillText('', 17, 25);
        ctx.font = '16px Arial Black';
        ctx.fillText(text, 17, 25);
        ctx.moveTo(0, 22);
        ctx.lineWidth = 2;
        ctx.lineTo(500, 5);
        ctx.stroke();
    };
    const _handleCheckVerification = () => {
        if (count.trim().length !== 0) {
            setBackground(true);
            setValueVerification('Đang xác minh');
            setTimeout(() => {
                if (count === text) {
                    setVerfied(true);
                } else {
                    setCheckInput2(true);
                    setClassInput('error_value_input');
                    setClassColorInput('color-value-input');
                    setValueVerification('Xác minh');
                    _handleRandomText();
                    inputRef.current.focus();
                }
                setBackground(false);
            }, 1000);
        } else {
            setCheckInput(true);
            setClassInput('error_value_input');
        }
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <canvas className={cx('canvas')} id="canvas" width="100" height="35"></canvas>
                <div className={cx('element-reload')}>
                    <button className={cx('reload-button')}>
                        <AiOutlineReload className={cx('reload-icon')} onClick={_handleRandomText} />
                    </button>
                    {isHighLight && <div className={cx('effect-background')} />}
                </div>
            </div>
            <div className={cx('element-input')}>
                <input
                    ref={inputRef}
                    type="text"
                    className={cx('user-input', classinput, classcolorinput)}
                    onChange={(e) => setCount(e.target.value)}
                    required
                    placeholder="Nhập mã xác minh..."
                    spellCheck={false}
                />
                {isHighLight && <div className={cx('effect-background')} />}
            </div>
            <div className={cx('element-verification')}>
                <button className={cx('verification-button')} onClick={_handleCheckVerification}>
                    {valueverification}
                </button>
                {isHighLight && <div className={cx('effect-background')} />}
            </div>
            {checkinput && <p>Vui lòng nhập mã xác minh.</p>}
            {checkinput2 && <p>Sai mã xác minh.</p>}
        </div>
    );
}

export default Captcha;
