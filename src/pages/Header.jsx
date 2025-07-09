import "../css/Header.css"

function Header(){

    return (<>
        <header className= "header-wrapper">
            <div className= "header-inner">

                <div className="header-left">

                    {/* Left Side: Navigation Links */}
                    <nav className= "nav-links">
                        <a href="#home">Home</a>
                        <a href="#about">About</a>
                        <a href="#projects">Projects</a>
                        <a href="#certs">Certifications</a>
                    </nav>
                </div>

                {/*Right Side: Social Links*/}
                <div className="social-icons">
                    <a href= "https://github.com/SwapnilDass"
                    target= "_blank"
                    rel= "noreferrer">

                        <img 
                        className= "icon-img"
                        src="github-icon.png"
                        alt= "Github" />
                    </a>

                    <a href= "https://www.linkedin.com/in/swapnil-das1/"
                    target= "_blank"
                    rel= "noreferrer">

                        <img 
                        className= "icon-img"
                        src="InBug-White.png"
                        alt= "LinkedIn" />
                    </a>

                    <a href= "mailto:swapnil.das@torontomu.ca"
                    target= "_blank"
                    rel= "noreferrer">

                        <img 
                        className= "icon-img"
                        src="envelope.png"
                        alt= "Email" />
                    </a>
                </div>
            </div>


        </header>
    
    
    </>)
}
export default Header