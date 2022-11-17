import React from 'react'

import vault from '../assets/animated.png';



const Diamonds = () => {
    return (
        <div className='diam flex centerflex vertcenter secPad'>
            <div className="container-lg flexcol centerflex vertcenter">
                <h2><b>LOREM IPSUM</b></h2>
                <div className="flex flexrow centerflex vertcenter space diamondsDiv">
                    <div className="cardDiam blueD">
                        <img className='shine2' src={vault} alt="vault" />
                        <span><b>Lorem ipsum</b>  dolor sit amet, consectetur adipiscing elit. Curabitur nec risus eget velit molestie consequat. Duis felis mi, mollis sed ante id, blandit porttitor velit.</span><br />
                        
                    </div>
                   
                    
                </div>
                
                
                <button className='btn readBtn'><a href="">Read More <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-book-fill" viewBox="0 0 16 16">
  <path d="M8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
</svg></a></button>
<button className='btn readBtn'><a href="#">Learn More <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-wallet-fill" viewBox="0 0 16 16">
  <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v2h6a.5.5 0 0 1 .5.5c0 .253.08.644.306.958.207.288.557.542 1.194.542.637 0 .987-.254 1.194-.542.226-.314.306-.705.306-.958a.5.5 0 0 1 .5-.5h6v-2A1.5 1.5 0 0 0 14.5 2h-13z"/>
  <path d="M16 6.5h-5.551a2.678 2.678 0 0 1-.443 1.042C9.613 8.088 8.963 8.5 8 8.5c-.963 0-1.613-.412-2.006-.958A2.679 2.679 0 0 1 5.551 6.5H0v6A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-6z"/>
</svg></a></button>
            </div>
            
        </div>
    )
}

export default Diamonds
