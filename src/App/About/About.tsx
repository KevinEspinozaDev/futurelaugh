import './About.css';
import captureLoomloo from './../../assets/captureloomloo.jpg';
import captureVrAssistant from './../../assets/capturevrassistant.jpg';
import captureqrCodeFast from './../../assets/captureqrcodefast.jpg';

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
          <h1 className="-titleBlack mt-5">Our Projects</h1>

          <div className="-cardSection">
            <div className="-card">
              <h2 className="-subtitle">VR assistant</h2>

              <img src={captureVrAssistant} alt="Vr assistant" className="imgResponsive"/>

              <div className="-cardBtnSection">

                <a href="https://vr-assistant.vercel.app/">

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

            <div className="-card">
              <h2 className="-subtitle">QR Code Fast</h2>

              <img src={captureqrCodeFast} alt="QR Code Fast" className="imgResponsive"/>

              <div className="-cardBtnSection">

                <a href="https://qrcode-fast.vercel.app/">

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

        <section className="section -bgWhite pt-3 pb-3">
          <h1 className="-titleBlack">Staff</h1>

          <ul className='-subtitleBlack staffList'>
            <li>Kevin Espinoza - Founder and Software Developer</li>
          </ul>
        </section>

      </div>
    </>
  )
}

export default About