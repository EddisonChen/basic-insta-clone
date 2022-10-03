import "./PostTypeBar.scss";
import grid from "../../data/grid.png"
import reels from "../../data/reels.png";
import play from "../../data/play.png";
import tagged from "../../data/tagged.png";

const PostTypeBar = () => {
    return (
        <div className="post__bar__icons">
            <img className="icon" src={grid} alt="posts"></img>
            <img className="icon" src={reels} alt="reels"></img>
            <img className="icon" src={play} alt="videos"></img>
            <img className="icon" src={tagged} alt="tagged posts"></img>
        </div>
    )
}

export default PostTypeBar;