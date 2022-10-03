import './style.css';
import facebook from './Asset/facebook.png';
import linkedin from './Asset/linkedin.png';
import twiter from './Asset/twiter.png';

const Footer = () => {
    return (
        <div className='footer'>

            <div className='imgLogo'>
                <img src={linkedin} alt="linkedin" className='iconFooter' />
                <img src={twiter} alt="twiter" className='iconFooter' />
                <img src={facebook} alt="facebook" className='iconFooter' />
            </div>

            <div className='ContainerText'>
                Proximity wordWide 2018. All Rights Reserved . <u>
                    Privacy statement
                </u>
            </div>
            
        </div>
    );
}

export default Footer;