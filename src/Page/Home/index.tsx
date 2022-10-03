import BtnScrollTop from '../../Component/BtnScrollTop';
import Footer from '../../Component/Footer';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

const Home = () => {
    return (
        <>
            <Step1 />
            <Step2 />
            <Step3 />
            <BtnScrollTop />
            <Footer />
        </>
    );
}

export default Home;