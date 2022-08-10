import styles from './ToolsvaCongCu.module.scss';
import classNames from 'classnames/bind';
import Content from '~/Components/Content';
import { Images } from '~/Images/Images';
const cx = classNames.bind(styles);
const ITEMS_TOOLS_OR_CONGCU = [
    {
        title: 'Công Cụ',
    },
    {
        title: 'Tools',
        data: [
            {
                title: 'Check Key HMA',
                content: 'Check key hma còn hạn sử dụng hay không, nếu còn thì ra ngày tạo, ngày hết hạn.',
                image: Images.ImageHMA,
                to: 'check-key-hma',
            },
            {
                title: 'Check Key HMA',
                content: 'Check key hma còn hạn sử dụng hay không , nếu còn thì ra ngày tạo, ngày hết hạn.',
                image: Images.ImageHMA,
                to: 'check-key-hma',
            },
        ],
    },
];
function ToolsvaCongCu() {
    const _handlRenderItemTCC = () => {
        return ITEMS_TOOLS_OR_CONGCU.map((item, index) => <Content key={index} title={item.title} data={item.data} />);
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>{_handlRenderItemTCC()}</div>
        </div>
    );
}

export default ToolsvaCongCu;
