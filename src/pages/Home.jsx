import "../css/Home.css"

function Home(){
    return (<>

    <div id="home" className="wrapper">
        <div className="intro-text">
            <h1 className= "greeting">Hi, my name is</h1>
            <h2 className= "name">Swapnil Das.</h2>
            <h3 className= "subtitle">Passionate about creating things that live on the internet.</h3>
            <p className= "description">I'm a software engineer based in <span className= "text-teal-400">Toronto, Canada.</span> I'm currently pursuing a Bachelor's degree in Computer Science, with a strong passion for <span className="text-teal-400">Artificial Intelligence</span>. I love building AI-driven projects and exploring how intelligent systems can solve real-world problems. Technology has always fascinated me, and coding is not just a skill — it's something I genuinely enjoy.  </p>
            <p className= "activities">
                When I'm not working or studying, you'll likely find me watching soccer, catching up on Formula 1, or lifting weights — things that keep me energized both mentally and physically.
            </p>

        </div>
    </div>
    
    </>)
}
export default Home