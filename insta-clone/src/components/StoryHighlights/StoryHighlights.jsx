import "./StoryHighlights.scss";
import storyIcon from "../../data/propic.png"

const StoryHighlights = (props) => {

    const {displayInfoStatus} = props

    return (
        <div className="story__combo">
            <img className="story__icon" src={storyIcon} alt="story icon"></img>
            <p>{displayInfoStatus.story_caption}</p>
        </div>
    )
}

export default StoryHighlights;