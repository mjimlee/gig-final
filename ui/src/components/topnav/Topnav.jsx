import "./topnav.css";
import Logo from "./assets/topnav-logo.png";
import pfp from "./assets/kianna.jpg";
import { Link } from "react-router-dom";

export default function Topnav() {
  return (
    <div className="topnav-container">
        <Link to="/">
          <img src={Logo} alt="Logo"/>
        </Link>
        <div className="profile-container">
          <div className="profile-wrapper">
            <div>
              <img src={pfp} alt="profile" id="topnav-pfp"/>
            </div>
            <Link to="/login">
              <p className="profile-image-text">
                <button className="logout-btn">
                  Logout
                </button>
              </p>
              </Link>
          </div>
        </div>
    </div>
  )
}
