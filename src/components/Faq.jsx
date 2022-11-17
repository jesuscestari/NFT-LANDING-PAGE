import React from 'react'
import { accordionData } from '../components/ContentFaq.jsx';
import Accordion from './Accordion.jsx';



const Faq = () => {

    return (
        <div className='faq flex centerflex vertcenter secPad'>
            <div className="container-lg flexcol centerflex vertcenter">
                <h2>F.A.Q</h2>
                <h5 className='tit5'>Find the answers for the most frequently asked questions below</h5>
                <div className="accordion">
                    {accordionData.map(({ title, content, key }) => (
                        <Accordion title={title} content={content}  key={key}/>
                    ))}
                    
                </div>
                
                        
                        
                    
            </div>
            
        </div>
        
    )
    
}

export default Faq
