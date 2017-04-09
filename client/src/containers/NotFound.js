import React            from 'react';
import Header           from './Header';


const backgroundStyle = {
    backgroundImage: 'url(https://images.unsplash.com/photo-1484712401471-05c7215830eb?dpr=2&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=&bg=)'
}
const NotFound = () => {
        return (
            <div id='not-found' style={backgroundStyle} className='container'>
                <Header />
                <div className='error'>
                    <h1>404 Not found</h1>
                </div>
            </div>
        );
};

export default NotFound;