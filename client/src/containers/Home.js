import React        from 'react';
import Header       from './Header';

const backgroundStyle = {
    backgroundImage: 'url(https://images.unsplash.com/photo-1485570661444-73b3f0ff9d2f?dpr=1&auto=format&fit=crop&w=1080&h=NaN&q=80&cs=tinysrgb&crop=&bg=)'
}

export default class Home extends React.Component {
    render(){
        return (
            <div id='home' style={backgroundStyle} className='container'>
                <Header />
                Home
            </div>
        )
    }
}