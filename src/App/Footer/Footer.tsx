import { Link } from 'react-router-dom'

import './Footer.css'

import imageLinkedin from './../../assets/linkedin.png';
import imageInstagram from './../../assets/instagram2.png';
import futureLaughLogo from './../../assets/logo.png';


function Footer() {
  return (
    <>
    <footer className="footer" id='footer'>

      <section className="firstFooter -bgPrimary">

        <h1 className='-title'>Contact Us</h1>
        <a href="mailto:futurelaugh.tech@gmail.com">
          <p>futurelaugh.tech@gmail.com</p>
        </a>
      </section>

      <section className="secondFooter -bgPrimary">
        <h1 className='-title'>The Company</h1>
        <Link className='-btn -btnWhite' to={'/about'}>About Future Laugh</Link>
      </section>

      <div className="thirdFooter">
        <div className="aSocialMedia">
          <a href="https://www.linkedin.com/company/88438575">
            <img src={imageLinkedin} alt="Linkedin" width={30} height={30}/>
            <span className='descriptionSocialMedia'>LinkedIn</span>
          </a>
        </div>

        <div className="aSocialMedia">
          <a href="https://www.instagram.com/futurelaughofficial/">
            <img src={imageInstagram} alt="Instagram" width={28} height={28}/>
            <span className='descriptionSocialMedia'>Instagram</span>
          </a>
        </div>
      </div>

      <section className="lastFooter">
        <img src={futureLaughLogo} alt="Logo Future Laugh" width={60} height={60}/>
        <span className='mt-3'>2025 Future Laugh Software </span>
        <span>All Rights Reserved.</span>
      </section>


    </footer>

    </>
  )
}

export default Footer