import "./Statistics.scss";

const Statistics = () => {
    return (
        <div className="profile__stats">
            <div className="counts">
                <p>44</p>
                <p className="stat__description">posts</p>
            </div>
            <div className="counts">
                <p>13.1m</p>
                <p className="stat__description">followers</p>
            </div>
            <div className="counts">
                <p>67</p>
                <p className="stat__description">following</p>
            </div>
        </div>
    )
}

export default Statistics;