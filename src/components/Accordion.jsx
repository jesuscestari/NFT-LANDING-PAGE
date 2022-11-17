import React from 'react'

const Accordion = ({ title, content }) => {
    const [isActive, setIsActive] = React.useState(false);
  
  
    return (
        <div className={isActive ? 'accordion-item activeItem' : 'accordion-item'}>
        <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
          <div>{title}</div>
          <div className='exp'>{isActive ? '-' : '+'}</div>
        </div>
        {isActive && <div className="accordion-content">{content}</div>}
      </div>
    )
}

export default Accordion
