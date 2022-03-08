import React from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';

export default function CoverImage (props) {
    let contentStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        color: 'white',
        backgroundColor: `rgba(0,0,0,${props.opacity == null && '0'}`,
        WebkitFilter: 'blur(0px) saturate(2)',
        textShadow: '2px 2px 5px black'
    }
  return (
    <div className="cover-image">
        <ParallaxBanner layers={[{image: props.imgsrc, speed: -6}]}
        style={{height: props.height}}>
            <div style={contentStyle}>
                {props.children}    
            </div>
        </ParallaxBanner>
    </div>
  )
}
