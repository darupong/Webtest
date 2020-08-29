import React , { useState } from 'react';
import './Dropdown.css';
import { MenuItems } from './MenuItems';

// function Dropdown() {
//     const [click, setClick] = useState(false)
    
//     const handleClick = () => setClick(!click)

//     return (
//         <>
//             <ul onClick={handleClick} className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
//                 {MenuItems.map((item, index) => {
//                     return (
//                         <li key={index}>

//                         </li>
//                     )
//                 })}
//             </ul>
//         </>
//     );
// }

export default Dropdown;