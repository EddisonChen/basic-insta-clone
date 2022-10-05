import "./ProfileDescription.scss";

const ProfileDescription = (props) => {

    const {displayInfoStatus} = props;

    return (
        <div>
            <h2>{displayInfoStatus.heading}</h2>
            <p>{displayInfoStatus.description}</p>
        </div>
    )
}

export default ProfileDescription;