import React from 'react'
import t1 from '../assets/ed.png';
import t2 from '../assets/rick.png';
import t3 from '../assets/3.png';
import t4 from '../assets/4.png';
import t5 from '../assets/5.png';


const Team = () => {
    return (
        <div className='team flex centerflex vertcenter secPad relative'>
            <div className="container-lg flex flexcol vertcenter relative">
                <h2>The Team</h2>
                <div className="flex flexrow space flexwrap">
                    <div className="cardTeam ed relative">
                        
                        <img src={t1} alt="Ed" />
                        <h4>Lorem</h4>
                        <span>Team member 1 </span>
                        
                    </div>
                    <div className="cardTeam mau relative">
                        
                        <img src={t2} alt="MJ" />
                        <h4>Lorem</h4>
                        <span>Team member 2 </span>
                        
                    </div>
                    <div className="cardTeam mau relative">
                      
                        <img src={t3} alt="MJ" />
                        <h4>Lorem</h4>
                        <span>Team member 3</span>
                    </div>
                    <div className="cardTeam mau relative">
                   
                        <img src={t4} alt="MJ" />
                        <h4>Lorem</h4>
                        <span>Team member 4 </span>
                       
                    </div>
                    <div className="cardTeam mau relative">
              
                        <img src={t5} alt="MJ" />
                        <h4>Lorem</h4>
                        <span>Team member 5 </span>
                        
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Team
