import './About.css';
import captureLoomloo from './../../assets/captureloomloo.png';

function About() {
  return (
    <>
      <div className="container">

        <div className='intro'>
          <div className="gif">
          </div>
          <h1 className="-title">About Future Laugh</h1>

          <div className="description">

            <p>
            Future Laugh is a software company focused on developing high quality products 
            for the whole world.
            </p>

            <p>
            The main priority is the user and their happiness when using our products.
            </p>

          </div>
        </div>

        <section className='section -bgWhite'>
          <h1 className="-titleBlack">Our Projects</h1>

          <div className="-cardSection">
            <div className="-card">
              <h2 className="-subtitle">loomloo</h2>

              <img src={captureLoomloo} alt="loomloo" />

              <div className="-cardBtnSection">

                <a href="https://loomloo.vercel.app/">

                  <button className="-btn btnVisit -btnWhite">
                    <svg fill="white" xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24"
                    width={20} height={20}
                    > 
                      <path d="M21 11V3h-8v2h4v2h-2v2h-2v2h-2v2H9v2h2v-2h2v-2h2V9h2V7h2v4h2zM11 5H3v16h16v-8h-2v6H5V7h6V5z" fill="currentColor"/> 
                    </svg>


                    <span className='btnDescription'>Visit</span>
                  </button>

                </a>
              </div>

            </div>
          </div>

        </section>

        <section className="section -bgWhite">
          <h1 className="-titleBlack">Staff</h1>

          <ul className='-subtitleBlack'>
            <li>Kevin Espinoza - CEO and Software Developer</li>
          </ul>
        </section>

      </div>
    </>
  )
}

export default About