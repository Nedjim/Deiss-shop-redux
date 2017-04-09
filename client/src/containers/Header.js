import React        from 'react';
import {Link}       from 'react-router';

const Header = (props) => {
    return(
        <header>
            <h1 id='logo'>Deiss Shop</h1>
            <nav className='navigation'>
                <Link to='/' className='link'>
                    <div>
                        <li>Home</li>
                    </div>
                </Link>
                <Link to='/boutique' className='link'>
                    <div>
                        <li>Boutique</li>
                    </div>
                </Link>
                <Link to='/auth' className='link'>
                    <div>
                        <li>S'identifier</li>
                    </div>
                </Link>
                <Link to='/create' className='link'>
                    <div>
                        <li>Créer un compte</li>
                    </div>
                </Link>
            </nav>
            <div className='message'>
                <span>{props.message}</span>
            </div>
        </header>
    )
}

export default Header;