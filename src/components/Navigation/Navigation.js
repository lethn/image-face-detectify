import React from 'react';
import './Navigation.css';

const Navigation = ({ onRouteChange, isSignedIn }) => {
    if (isSignedIn) {
        return (
            <nav>
                <p
                    onClick={() => onRouteChange('signout')}
                    className='b mh4 ph3 pv2 ba b--black bg-transparent grow pointer f6'>
                    Sign Out
                </p>
            </nav>
        );
    } else {
        return (
            <nav>
                <p
                    onClick={() => onRouteChange('signin')}
                    className='b mh2 ph3 pv2 ba b--black bg-transparent grow pointer f6'>
                    Sign In
                </p>
                <p
                    onClick={() => onRouteChange('register')}
                    className='b mh4 ph3 pv2 ba b--black bg-transparent grow pointer f6'>
                    Register
                </p>
            </nav>
        );
    }
}

export default Navigation;