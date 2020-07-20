import React from 'react';
import Photo from './../../assets/photosPic.jpeg';
import Vid from "./../../assets/Video1.jpg";
import './styles.scss';


const Directory = props => {
    return(
        <div className='directory'>
            <div className='wrap'>
            <div 
            className='item'
                style={{
                    backgroundImage:`url(${Photo})`
                }}
               
               >
                    <a>
                        photos
                    </a>
            </div>
            
            <div 
            className='item' 
                style={{
                backgroundImage:`url(${Vid})`
                 }}
                 > 
                 <a>films</a>
                 </div>

        </div>
        </div>
    );
};

export default Directory;