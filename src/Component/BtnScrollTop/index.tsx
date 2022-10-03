import './style.css';

const BtnScrollTop = () => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    return (
        <div
            className='btnToTop'
            onClick={scrollToTop}
        >
            Return to top
        </div>
    );
}

export default BtnScrollTop;