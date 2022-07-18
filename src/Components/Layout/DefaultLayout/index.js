import Header from '../Components/Header';

function DefaultLayout({ children }) {
    return (
        <div className="container">
            <Header />
            <div className="content">{children}</div>
        </div>
    );
}

export default DefaultLayout;
