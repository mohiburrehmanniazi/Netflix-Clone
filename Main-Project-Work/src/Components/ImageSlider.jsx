/* eslint-disable no-unused-vars */
import React from 'react';
import "react-slideshow-image/dist/styles.css";
import { Slide } from 'react-slideshow-image';

function ImageSlider() {

    const slideImages = [
        {
            url: 'https://pbs.twimg.com/media/EIs-iykU8AASn2x.jpg',
            id: 1
        },
        {
            url: 'https://images.squarespace-cdn.com/content/v1/5fbc4a62c2150e62cfcb09aa/33e62911-2708-4875-9c71-9926f571e1c1/The%2BBatman.jpg?format=1000w',
            id: 2
        },
        {
            url: 'https://pbs.twimg.com/media/EIs-iykU8AASn2x.jpg',
            id: 3
        }
    ]

    const divStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '550px',
        backgroundSize: 'cover',
        border: 'none',
        
        
    }

    return (
        <div className='slide_container'>
            <Slide>
                {slideImages.map((image, index) => (
                    <div key={index}>
                        <div style={{ ...divStyle, backgroundImage: `url(${image.url})` }}>
                        </div>
                    </div>
                ))}
            </Slide>
        </div>
    )
}

export default ImageSlider