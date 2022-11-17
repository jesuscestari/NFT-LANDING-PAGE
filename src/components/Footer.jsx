import React from 'react'
import Marquee from "react-fast-marquee";

const Footer = () => {
    return (
        <div className='footerDiv flex centerflex flexcol vertcenter relative'>
            
            <Marquee
                    className='footerText'
                    speed={70}
                    gradient={false}
                    >
                    <span>  LOREM IPSUM</span>
                    <span> - LOREM IPSUM</span>
                    <span> - LOREM IPSUM</span>
                    <span> - LOREM IPSUM</span>
                    <span> - LOREM IPSUM</span>


            </Marquee>
        </div>
    )
}

export default Footer
