import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return (
        <div>
            <p className='f2 ma3'>Face Detection In Image</p>
            <div className='center'>
                <div className='form center br4 pa4 br3 shadow-5'>
                    <input
                        className='f4 br2 pa2 w-80 center'
                        type="text"
                        placeholder="Paste image URL here"
                        onChange={onInputChange} />
                    <button
                        className='w-23 b br4 ml3 ph3 pv2 ba b--black grow pointer f4 dib black bg-light-grey'
                        onClick={onButtonSubmit}>
                        Detect
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;