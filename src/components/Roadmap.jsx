import React from 'react'


const Roadmap = () => {

    React.useEffect(() => {
        const elementResal = document.querySelectorAll('.elementResal');
  
        const conObs = {
          root: null,
          rootMargin: '-49% 0px -49% 0px',
          threshold: 0
        };
      
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('activeRoad')
                } else {
                    entry.target.classList.remove('activeRoad')
                }
            });
        }, conObs);
      
      
        elementResal.forEach(item => {
            observer.observe(item);
        });
    })
    

    return (
        <div className='road flex centerflex vertcenter secPad relative'>
            <div className="container-lg flexcol centerflex vertcenter lineMap relative">
                <h2>Roadmap</h2>
                <div className="elementResal cardRoad">
                    <span>Phase 1</span>
                    <ul className='listroad'>
                        <li>· Lorem ipsum dolor sit amet</li> <br />
                        <li>· PLorem ipsum dolor sit amet</li> <br />
                        <li>· Lorem ipsum dolor sit amet</li><br />
                        <li>· Lorem ipsum dolor sit amet</li>
                    </ul>
                </div>
                <div className="elementResal cardRoad">
                    <span>Phase 2</span>
                    <ul className='listroad'>
                        <li>· Lorem ipsum dolor sit amet</li> <br />
                        <li>· Lorem ipsum dolor sit amet</li><br />
                        <li>· RLorem ipsum dolor sit amet</li><br />
                        <li>· Lorem ipsum dolor sit amet</li>
                    </ul>
                </div>
                <div className="elementResal cardRoad">
                    <span>Phase 3</span>
                    <ul className='listroad'>
                        <li>· Lorem ipsum dolor sit amet</li><br />
                        <li>· Lorem ipsum dolor sit amet</li><br />
                        <li>· Lorem ipsum dolor sit amet</li><br />
                       
                    </ul>
                </div>
                
               
                
            </div>
        </div>
    )
}

export default Roadmap
