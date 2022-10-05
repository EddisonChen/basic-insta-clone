import "./ProfileInfo.scss"
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import ProfileDescription from "../../components/ProfileDescription/ProfileDescription";
import StoryHighlights from "../../components/StoryHighlights/StoryHighlights";
import Statistics from "../../components/Statistics/Statistics";

const ProfileInfo = (props) => {

    const {displayInfoStatus} = props
        
    return (
        <div>
            <ProfileHeader
                displayInfoStatus={displayInfoStatus}/>
            <ProfileDescription
                displayInfoStatus={displayInfoStatus}/>
            <StoryHighlights
                displayInfoStatus={displayInfoStatus}/>
            <Statistics
                displayInfoStatus={displayInfoStatus}/>
        </div>
    )
        
}

export default ProfileInfo