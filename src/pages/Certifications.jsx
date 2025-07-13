import { useState } from "react"
import "../css/Certifications.css"

function Certifications(){

    const [showCert1, setShowCert1] = useState(false);
    const [showCert2, setShowCert2] = useState(false);

    const toggleCert1 = () => setShowCert1(!showCert1);
    const toggleCert2 = () => setShowCert2(!showCert2);


    return (<>
        <div id= "certs" className= "wrapper">
            <div className="inner">

                <div className= "header">
                    <span className= "text-teal-400 animate-ping">/</span>certifications (click to open)
                </div>

                <button onClick={toggleCert1} className="cert-toggle1">
                    {showCert1? "Hide Certificate" : "AWS Certified Cloud Practitioner "}

                </button>

                <div className={`cert-image-container ${showCert1 ? "show" : "hide"}`}>
                <img
                    src="./AWS.jpg"
                    alt="Certificate"
                    className="cert-img"
                />
                </div>


                <button onClick={toggleCert2} className="cert-toggle2">
                    {showCert2? "Hide Certificate" : "Udemy JavaScript Certificate"}

                </button>

                <div className={`cert-image-container ${showCert2 ? "show" : "hide"}`}>
                <img
                    src="JS.jpg"
                    alt="Certificate"
                    className="cert-img"
                />
                </div>


            </div>

        </div>
        
    </>)
}

export default Certifications

