import React from 'react'

const Projectcard =(props) => {
    const {name,description,github}=props.Myproject
    // const { Myproject:{name,description,github}}=props
    return (
      <>  
      {/* <h2 className="text-important text-center">Projects</h2> */}
      <section id="projects-section">
    
      <div className="projects-container">
            <div className="project-card">
                <h3>Project Name :{name}</h3>
          {/* <img src="images/proj.png" alt="project" /> */}
          <p>
            {description}
          </p>
          <p>Github :{github}<a href="#">link</a></p>
        </div>    
        </div>
    </section>
        {/* <div className="project-card">
          <img src="images/proj.png" alt="project" />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id ipsam
            ullam autem consequuntur.
          </p>
          <p>Github <a href="#">link</a></p>
        </div>
        <div className="project-card">
          <img src="images/proj.png" alt="project" />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id ipsam
            ullam autem consequuntur.
          </p>
          <p>Github <a href="#">link</a></p>
        </div>
        <div className="project-card">
          <img src="images/proj.png" alt="project" />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id ipsam
            ullam autem consequuntur.
          </p>
          <p>Github <a href="#">link</a></p>
        </div>
        <div className="project-card">
          <img src="images/proj.png" alt="project" />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id ipsam
            ullam autem consequuntur.
          </p>
          <p>Github <a href="#">link</a></p>
        </div>
        <div className="project-card">
          <img src="images/proj.png" alt="project" />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id ipsam
            ullam autem consequuntur.
          </p>
          <p>Github <a href="#">link</a></p>
        </div> */}
    
       </>
    )
}

export default Projectcard
