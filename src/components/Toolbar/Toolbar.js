import React , {useState} from 'react';
import './Toolbar.css';
import { Button } from './Button.js';


function Navbar() {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(true);
        }
    }

    const onMouseLeave = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(false);
        }
    }
}

const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar_navigation">
            <div></div>
            <div className="toolbar_logo">
            <img src="/logo-light.png" width={150} height={'auto'} className="logo" alt=""/>
                <a href="/"></a>
                </div>
            <div className="spacer" />
            <div className="toolbar_navigation-item">
                <ul>
                    <li><a href="/">หน้าหลัก</a></li>
                    <li>
                        
                        <a href="/">คอร์ส</a>
                    </li>
                    <li>
                        <a href="/">ขั้นตอนการชำระเงิน</a>
                    </li>
                    <Button />
                </ul>
            </div>
        </nav>
    </header>
);

export default toolbar;