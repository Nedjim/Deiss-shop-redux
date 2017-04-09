import React        from 'react';
import Header       from './Header';


const backgroundStyle = {
    backgroundImage: 'url(https://images.unsplash.com/photo-1485518882345-15568b007407?dpr=1&auto=format&fit=crop&w=1080&h=NaN&q=80&cs=tinysrgb&crop=&bg=)'
}

export default class Boutique extends React.Component {
    render(){
        return (
            <div id='boutique' style={backgroundStyle} className='container'>
                <Header />
                Boutique
            </div>
        )
    }
}