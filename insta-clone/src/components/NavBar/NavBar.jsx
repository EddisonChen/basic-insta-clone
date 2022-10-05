import "./NavBar.scss";
import homeIcon from "../../data/home2.png";
import sendIcon from "../../data/send2.png";
import addIcon from "../../data/add.png";
import discoverIcon from "../../data/discover2.png";
import heartIcon from "../../data/heart.png";
import profileIcon from "../../data/profile.png"

const NavBar = (props) => {

    const {profileSwitch, setProfileSwitch} = props;

    const switchProfiles = () => {
        if (profileSwitch == "grompy") {
            setProfileSwitch("grampy")
        } else {
            setProfileSwitch("grompy")
        }
    }

    console.log(profileSwitch)

    return (
        <div className="navbar">
            <p>Instagram</p>
            <img className="navbar__item" src={homeIcon} alt="home icon"></img>
            <img className="navbar__item" src={sendIcon} alt="send icon"></img>
            <img className="navbar__item" src={addIcon} alt="add icon"></img>
            <img className="navbar__item" src={discoverIcon} alt="discover icon"></img>
            <img className="navbar__item" src={heartIcon} alt="heart icon"></img>
            <img onClick={switchProfiles} className="navbar__item" src={profileIcon} alt="profile icon"></img> 
        </div>
    )
}

export default NavBar;