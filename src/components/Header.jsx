import React from 'react';
// чтобы приложение не перезагружалось при смене страниц, используем компонент Link и его атрибут to (пувть) вместо тега а
import { Link } from 'react-router-dom';

function Header(props) {
    return (
        // меняем цвет наву, добавляем классНейм наву с названием цвета из палитры в библиотеке https://materializecss.com/color.html
        <nav className='teal darken-2'>
            <div className='nav-wrapper'>
                <Link to='/' className='brand-logo'>
                    React SPA
                </Link>
                <ul id='nav-mobile' className='right hide-on-med-and-down'>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contact</Link>
                    </li>
                    <li>
                        <a href='https://github.com/maximmorenko/spa-food-project'>Repo</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header; 
