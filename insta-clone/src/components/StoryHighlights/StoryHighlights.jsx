import "./StoryHighlights.scss";
import storyIcon from "../../data/propic.png"

const StoryHighlights = () => {
    return (
        <div className="story__combo">
            <img className="story__icon" src={storyIcon} alt="story icon"></img>
            <p>title</p>
        </div>
    )
}

export default StoryHighlights;