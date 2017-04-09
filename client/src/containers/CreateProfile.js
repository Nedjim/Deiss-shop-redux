import React        from 'react';
import Header       from './Header';

const backgroundStyle = {
    backgroundImage: 'url(https://images.unsplash.com/photo-1481399124169-87493351c8a1?dpr=2&auto=compress,format&fit=max&w=450&q=80&cs=tinysrgb&crop=)'
}

export default class CreateProfile extends React.Component {
    render(){
        return (
            <div id='create-profile' style={backgroundStyle} className='container'>
                <Header />
                <div className='formulaires'>
                    <h3>Créer un compte</h3>

                    <form method="post">
                        <div>
                            <input type='text' placeholder='Pseudo' name='pseudo' />
                        </div>
                        <div>
                            <input type='email' placeholder='E-mail' name='email' />
                        </div>
                        <div>
                            <input type='password' placeholder='Mot de passe' name='password' />
                        </div>
                        <div>
                            <input type='password' placeholder='Confirmer le mot de passe' name='password' />
                        </div>
                        <div>
                            <button type='submit'>Créer</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}