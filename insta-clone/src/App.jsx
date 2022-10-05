import './App.scss';
import NavBar from './components/NavBar/NavBar';
import PostTypeBar from './components/PostTypeBar/PostTypeBar';
import ProfilePosts from './components/ProfilePosts/ProfilePosts';
import ProfileInfo from './containers/ProfileInfo/ProfileInfo';
import profileData from "./data/profiles.json"
import {useState, useEffect} from 'react';

function App() {

  const [profileSwitch, setProfileSwitch] = useState("grompy")
  const [displayInfoStatus, setDisplayInfoStatus] = useState(profileData[0])

  const infoSwitch = () => {
    if (profileSwitch == "grompy") {
      setDisplayInfoStatus(profileData[0])
    } else if (profileSwitch == "grampy") {
      setDisplayInfoStatus(profileData[1])
    }
  }

  useEffect(infoSwitch, profileSwitch)

  return (
    <>
      <NavBar
        profileSwitch={profileSwitch}
        setProfileSwitch={setProfileSwitch}/>
      <ProfileInfo
        displayInfoStatus={displayInfoStatus}/>
      <PostTypeBar/>
      <ProfilePosts/>
    </>
  )
}

export default App;
