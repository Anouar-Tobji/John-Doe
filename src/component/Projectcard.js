import React from 'react'

const Projectcard =(props) => {
    const {name,description,github}=props.Myproject

    return (
      <>  
      
      <section id="projects-section">
    
      <div className="projects-container">
            <div className="project-card">
                <h3>Project Name :{name}</h3>
          
          <p>
            {description}
          </p>
          <p>Github :{github}<a href="#">link</a></p>
        </div>    
        </div>
    </section>
        
    
       </>
    )
}

export default Projectcard
