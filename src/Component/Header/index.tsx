import { useEffect, useLayoutEffect } from 'react';
import closeIcon from './Asset/close.png';
import menuIcon from './Asset/menu.png';
import './style.css';

const Header = () => {

    const open = () => {
        (document as any).getElementById('menu').style.display = 'block';
        (document as any).getElementById('Open').style.display = 'none';
        (document as any).getElementById('Close').style.display = 'block';
        (document as any).getElementById('header').style.background = 'white';
    }

    const close = () => {
        (document as any).getElementById('menu').style.display = 'none';
        (document as any).getElementById('Open').style.display = 'block';
        (document as any).getElementById('Close').style.display = 'none';
        (document as any).getElementById('header').style.background = 'transparent';
    }

    useLayoutEffect(() => {

        window.addEventListener('resize', () => {
            if (window.innerWidth < 900) {
                (document as any).getElementById('menu').style.display = 'none';
                (document as any).getElementById('btn').style.visibility = 'visible';
                close();
            } else {
                (document as any).getElementById('menu').style.display = 'block';
                (document as any).getElementById('btn').style.visibility = 'hidden';
            }
        });

    }, []);

    useEffect(() => {
        if (window.innerWidth < 900) {
            (document as any).getElementById('menu').style.display = 'none';
            (document as any).getElementById('btn').style.visibility = 'visible';
            close();
        } else {
            (document as any).getElementById('menu').style.display = 'block';
            (document as any).getElementById('btn').style.visibility = 'hidden';
        }
    }, [])

    return (
        <div className='header' id="header">
            <div id="btn" className='btnMobile'>
                <div id="Open" onClick={open}>
                    <img
                        src={menuIcon}
                        alt='open icon'
                        className='btnOpen'
                    />
                </div>
                <div id="Close" onClick={close}>
                    <img
                        src={closeIcon}
                        alt='close'
                        className='btnOpen'
                    />
                </div>
            </div>
            <div id="menu" className='menuHeader'>
                <ul>
                    <li>
                        About
                    </li>
                    <li>
                        Work
                    </li>
                    <li>
                        Lasted
                    </li>
                    <li>
                        People & careers
                    </li>
                    <li>
                        Contact
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Header;