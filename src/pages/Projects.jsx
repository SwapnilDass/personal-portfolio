import "../css/Projects.css"


function Projects(){

    return (<>
        <div id="projects" className="wrapper">
            <div className= "inner">
                <div className="header">
                    <h2 className="project-heading">
                        <span className= "text-teal-400 animate-ping">/</span>Projects
                    </h2>
                </div>
                
                <div className= "projects-grid">
                    <div className= "project-card">
                        <a className= "github-icon"
                                href="https://github.com/SwapnilDass/Track-App"
                                target= "_blank"
                                rel="noopener noreferrer"
                            >
                                <img src="github-icon.png"
                                alt= "https://github.com/SwapnilDass/Track-App"
                                className="icon-img"
                                
                                ></img>
                            
                        </a>
                        <h3 className= "project-title">
                            Track-App
                        </h3>
                        <p className= "project-desc">
                            App that allows user to keep a daily track of their tasks
                        </p>
                        <p className="programming-utilities">Java
                        </p>
                    </div>


                    <div className= "project-card">
                        <a className= "github-icon"
                                href="https://github.com/SwapnilDass/RealTime-Weather-Forecast-Software"
                                target= "_blank"
                                rel="noopener noreferrer"
                            >
                                <img src="github-icon.png"
                                alt= "https://github.com/SwapnilDass/RealTime-Weather-Forecast-Software"
                                className="icon-img"
                                
                                ></img>
                            
                        </a>
                        <h3 className= "project-title">
                            Weather Forecast
                        </h3>
                        <p className= "project-desc">
                            Software that allows any user to search for a city or country to check the weather condition 
                        </p>
                        <p className="programming-utilities">Java
                        </p>
                    </div>


                    <div className= "project-card">
                        <a className= "github-icon"
                                href="https://github.com/SwapnilDass/YouTube-Clone"
                                target= "_blank"
                                rel="noopener noreferrer"
                            >
                                <img src="github-icon.png"
                                alt= "https://github.com/SwapnilDass/YouTube-Clone"
                                className="icon-img"
                                
                                ></img>
                            
                        </a>
                        <h3 className= "project-title">
                            YT CloneX
                        </h3>
                        <p className= "project-desc">
                            A responsive YouTube Clone UI built with HTML and CSS, featuring a modern video layout and sleek design.
                        </p>
                        <p className="programming-utilities">HTML, CSS
                        </p>
                    </div>


                    <div className= "project-card">
                        <a className= "github-icon"
                                href="https://github.com/SwapnilDass/Replicated-Uber"
                                target= "_blank"
                                rel="noopener noreferrer"
                            >
                                <img src="github-icon.png"
                                alt= "https://github.com/SwapnilDass/Replicated-Uber"
                                className="icon-img"
                                
                                ></img>
                            
                        </a>
                        <h3 className= "project-title">
                            Replicated Uber Backend
                        </h3>
                        <p className= "project-desc">
                            A backend system replicating Uber's core functionalities, including ride requests, driver matching, and transaction management.
                        </p>
                        <p className="programming-utilities">Java
                        </p>
                    </div>

                    



                </div>
            </div>
        </div>

    
    </>)
}
export default Projects
