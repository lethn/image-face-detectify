import React from 'react';
import Tilt from 'react-parallax-tilt';
import ImageFaceDetectify from './ImageFaceDetectify.png';
import './Logo.css';

const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt className='Tilt br4 shadow-2' tiltMaxAngleX={25} >
                <div className='logo'>
                    <img src={ImageFaceDetectify} alt="logo" width='600px' className='logo-image' />
                </div>
            </Tilt>
        </div>
    );
}

export default Logo;