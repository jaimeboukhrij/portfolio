import section1Bg from "../src/assets/bgsection1.jpg"
import fotocv from "../src/assets/fotoCv.jpg"

const Section1 = () => {


    return (
        <section id="section1" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)), url(${section1Bg})`, }} className='section1'>
            <main>
                <img src={fotocv} alt="" />
                <article>
                    <p>Hi!</p>
                    <p>I´m Jaime Boukhrij</p>
                    <p>Full Stack Mern Developer</p>
                </article>
            </main>
        </section>
    )
}

export default Section1