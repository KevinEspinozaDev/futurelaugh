import './Footer.css'
import imageLinkedin from './../../assets/linkedin.png'

function Footer() {
  return (
    <>
    <footer className="footer -bgPrimary">
      <h1 className='-title'>Future Laugh Technologies</h1>

      <div className="buttons">
        <p>Find us in</p>

        <div className="aSocialMedia">
          <img src={imageLinkedin} alt="Linkedin" width={30} height={30}/>
          <a href="https://www.linkedin.com/company/88438575">
            <span className='descriptionSocialMedia'>LinkedIn</span>
          </a>
        </div>
      </div>

      <div className="rights">
        Copyright @2023 Future Laugh. All rights reserved.
      </div>
    </footer>

    </>
  )
}

export default Footer