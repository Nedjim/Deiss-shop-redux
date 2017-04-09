import React        from 'react';
import Header       from './Header';

const backgroundStyle = {
    backgroundImage: 'url(https://images.unsplash.com/photo-1481399124169-87493351c8a1?dpr=2&auto=compress,format&fit=max&w=450&q=80&cs=tinysrgb&crop=)'
}

export default class Auth extends React.Component {
    render(){
        return (
            <div id='authentication' style={backgroundStyle} className='container'>
                <Header />
                <div className='formulaires'>
                    <h3>IDENTIFICATION</h3>
                    <form method="post">
                        <div>
                            <input type='text' name='pseudo' placeholder='Pseudo' />
                        </div>
                        <div>
                            <input type='password' name='password' placeholder='Mot de passe' />
                        </div>
                        <div>
                            <button type='submit'>S'identifier</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}