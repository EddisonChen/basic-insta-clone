import "./ProfileInfo.scss"
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import ProfileDescription from "../../components/ProfileDescription/ProfileDescription";
import StoryHighlights from "../../components/StoryHighlights/StoryHighlights";
import Statistics from "../../components/Statistics/Statistics";

const ProfileInfo = () => {
    return (
        <div>
            <ProfileHeader/>
            <ProfileDescription/>
            <StoryHighlights/>
            <Statistics/>
        </div>
    )
        
}

export default ProfileInfo