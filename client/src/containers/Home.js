import React        from 'react';
import Header       from './Header';

export default class Home extends React.Component {
    render(){
        return (
            <div id='home'>
                <Header />
                Home
            </div>
        )
    }
}