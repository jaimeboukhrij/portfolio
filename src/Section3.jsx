import moviesPage from "./assets/filmbg.png"
import canvas from "./assets/canvas.png"
import gymLion from "./assets/gymLion.jpg"
import blablacar from "./assets/BlaBlacar.png"

const Section3 = () => {

    return (

        <section className="section3">
            <h3>Projects</h3>
            <div className="flex">

                <section class="record" >
                    <div id="record2" class="record-display" style={{ backgroundImage: `url(${blablacar})` }}></div>
                    <div class="record-desc">
                        <h4>BlaBlaCar Page</h4>
                        <p>project not finished yet...</p>
                        {/* <button onClick={() => window.open("https://moviespagejb.netlify.app/", '_blank')}>Web Page</button> */}
                        <button onClick={() => window.open("https://github.com/jaimeboukhrij/BlablaCarCLient", "_blank")}>Client</button>
                        <button onClick={() => window.open("https://github.com/jaimeboukhrij/BlablaCarServer", "_blank")}>Server</button>
                    </div>
                </section>

                <section class="record" onClick={() => window.open("https://moviespagejb.netlify.app/", '_blank')}>
                    <div id="record2" class="record-display" style={{ backgroundImage: `url(${moviesPage})` }}></div>
                    <div class="record-desc">
                        <h4>MoviesPage</h4>
                        <p>React | NodeJS | JavaScript | Express | MongoDB ...</p>
                        <button onClick={() => window.open("https://moviespagejb.netlify.app/", '_blank')}>Web Page</button>
                        <button onClick={() => window.open("https://github.com/jaimeboukhrij/MoviesPageClient", "_blank")}>Client</button>
                        <button onClick={() => window.open("https://github.com/jaimeboukhrij/MoviesPageServer", "_blank")}>Server</button>
                    </div>
                </section>


                <section class="record" onClick={() => window.open("https://gym-lion.netlify.app/", '_blank')}>
                    <div id="record2" class="record-display" style={{ backgroundImage: `url(${gymLion})` }}></div>
                    <div class="record-desc">
                        <h4>GymLion</h4>
                        <p>React | NodeJS | JavaScript | Express | MongoDB ...</p>
                        <button onClick={() => window.open("https://gym-lion.netlify.app/", '_blank')}>Web Page</button>
                        <button onClick={() => window.open("https://github.com/jaimeboukhrij/gymLion-client", "_blank")}>Client</button>
                        <button onClick={() => window.open("https://github.com/jaimeboukhrij/gymLion-server", "_blank")}>Server</button>
                    </div>
                </section>

                <section class="record" onClick={() => window.open("https://jaimeboukhrij.github.io/juegoanajaime/", '_blank')}>
                    <div id="record2" class="record-display" style={{ backgroundImage: `url(${canvas})` }}></div>
                    <div class="record-desc">
                        <h4>Mario Game</h4>
                        <p>JS | Canvas | HTML | CSS ...</p>
                        <button onClick={() => window.open("https://jaimeboukhrij.github.io/juegoanajaime/", '_blank')}>Web Page</button>
                        <button onClick={() => window.open("https://github.com/jaimeboukhrij/juegoanajaime", "_blank")}>Client</button>
                    </div>
                </section>

            </div>




        </section>


    )
};

export default Section3;
