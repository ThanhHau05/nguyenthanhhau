import styles from './Content.module.scss';
import classNames from 'classnames/bind';
import Image from '~/Images/Image';
const cx = classNames.bind(styles);

function Content({ data, title }) {
    console.log(data);
    const _handleRenderItems = () => {
        return data ? (
            data.map((item, index) => (
                <div key={index} className={cx('product-container')}>
                    <Image className="product-image" src={item.image} alt={item.title} />
                    <div className={cx('product-content-total')}>
                        <div className={cx('product-title')}>{item.title}</div>
                        <div className={cx('product-content')}>
                            <p>{item.content}</p>
                        </div>
                    </div>
                    <div className={cx('use-wrap')}>
                        <a href={item.to}>
                            <svg height="60" width="160" xmlns="http://www.w3.org/2000/svg">
                                <rect className={cx('shape')} height="60" width="160" />
                            </svg>
                            <button className={cx('use-btn')}>SỬ DỤNG</button>
                        </a>
                    </div>
                </div>
            ))
        ) : (
            <div className={cx('no-product')}>
                <h4>không có sản phẩm nào.</h4>
            </div>
        );
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <h2 className={cx('content-title')}>{title}</h2>
                <div className={cx('content')}>{_handleRenderItems()}</div>
            </div>
        </div>
    );
}

export default Content;
