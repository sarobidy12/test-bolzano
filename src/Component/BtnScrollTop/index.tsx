import './style.css';
import up from './Asset/up.png';

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
            <img src={up} className="iconUp" alt='iconUp' />
            Return to top
        </div>
    );
}

export default BtnScrollTop;