import "./Navbar.css"
import futureLaughLogo from './../../assets/futurelaughlogo.png';
import { useState } from "react";
import { Link} from 'react-router-dom';


function Navbar (){

    const [isNavExpanded, setIsNavExpanded] = useState(false);


    return (
        <nav className="navigation">

            <div className="navbar">

                <Link to="/">

                    <div className="logo">
                        <img src={futureLaughLogo} alt="Logo Future Laugh" width={60} height={60}/>
                        <h2>Future Laugh</h2>
                    </div>
                </Link>

                <button className="hamburger"
                onClick={() => {
                    setIsNavExpanded(!isNavExpanded);
                }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg"
                    fill="#f2f2f2ff"
                    width="48px"
                    height="48px"
                    >
                        <path 
                        d="M6 36v-3h36v3Zm0-10.5v-3h36v3ZM6 15v-3h36v3Z"
                        />
                    </svg>
                </button>
            </div>

            <div
            className={"navigation-menu "+
                (isNavExpanded === true ? "expanded fadein" : "fadeout")
            }
            >
                <ul>
                    <li>
                        <Link to={'/home'} className="link">Home</Link>
                    </li>
                    <li>
                        <Link to={'/about'} className="link">About</Link>
                    </li>
                    <li>
                        <a href='#footer' className="link">Contact</a>
                    </li>
                </ul>
                
            </div>

        </nav>
    )

}

export default Navbar;