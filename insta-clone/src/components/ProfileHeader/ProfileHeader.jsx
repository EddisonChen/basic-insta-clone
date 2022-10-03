import "./ProfileHeader.scss";
import propic from "../../data/propic.png"
import check from "../../data/verified.png"

const ProfileHeader = () => {
    return (
        <div className="header">
            <img className="profile__pic" src={propic} alt="profile"></img>
            <div className="header__text">
                <div className="profile__title">
                    <h1>grompy</h1>
                    {/* <img className="verified__icon" src={check} alt="verified icon"></img> */}
                </div>
                <div className="actions">
                    <button className="action__button">Follow</button>
                    <button className="action__button">✓</button>
                </div>
            </div>
        </div>
    )
}

export default ProfileHeader;