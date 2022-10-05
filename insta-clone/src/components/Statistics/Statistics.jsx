import "./Statistics.scss";

const Statistics = (props) => {

    const {displayInfoStatus} = props;

    return (
        <div className="profile__stats">
            <div className="counts">
                <p>{displayInfoStatus.post_count}</p>
                <p className="stat__description">posts</p>
            </div>
            <div className="counts">
                <p>{displayInfoStatus.follower_count}</p>
                <p className="stat__description">followers</p>
            </div>
            <div className="counts">
                <p>{displayInfoStatus.following_count}</p>
                <p className="stat__description">following</p>
            </div>
        </div>
    )
}

export default Statistics;