import "./ProfilePosts.scss";
import blob from "../../data/bbom.png"

const ProfilePosts = () => {
    return (
        <div className="posts">
            <img className="post" src={blob} alt="post"></img>
            <img className="post" src={blob} alt="post"></img>
            <img className="post" src={blob} alt="post"></img>
            <img className="post" src={blob} alt="post"></img>
            <img className="post" src={blob} alt="post"></img>
            <img className="post" src={blob} alt="post"></img>
        </div>
    )
}

export default ProfilePosts;