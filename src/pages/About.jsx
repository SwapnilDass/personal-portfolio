import "../css/About.css"

function About(){
    return(<>   
        <div id="about" className= "wrapper">
            <div className="header"> 
                <h2 className= "about-heading"> 
                    <span className=  "text-teal-400 animate-ping ">/</span>about me </h2> 
                <p className= "about-description" >
                Currently in my third year of Computer Science at <span className= "text-teal-400">Toronto Metropolitan University</span>, I’m building skills in web development, artificial intelligence, cloud computing, and beyond. My goal is to become a full-stack developer with a deep understanding of AI systems, and to contribute to impactful, meaningful software projects
                </p>

            <div className="tech-stack">
                <h2>My current tech stack:</h2>
                <p className="tech-items">

                    <span className= "tech-component">JavaScript</span>
                    <span className= "tech-component">React</span>
                    <span className= "tech-component">Tailwind CSS</span>
                    <span className= "tech-component">HTML</span>
                    <span className= "tech-component">Java</span>
                    <span className= "tech-component">Python</span>
                    <span className= "tech-component">AWS</span>
                    <span className= "tech-component">MySQL</span>
                    <span className= "tech-component">Git</span>
                    <span className= "tech-component">Rust</span>
                    <span className= "tech-component">Elixir</span>
                    <span className= "tech-component">SmallTalk</span>

                </p>

            </div>
            </div>


        </div>
    </>)
}
export default About