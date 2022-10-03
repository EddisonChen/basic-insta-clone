import './App.scss';
import NavBar from './components/NavBar/NavBar';
import PostTypeBar from './components/PostTypeBar/PostTypeBar';
import ProfilePosts from './components/ProfilePosts/ProfilePosts';
import ProfileInfo from './containers/ProfileInfo/ProfileInfo';

function App() {


  return (
    <>
      <NavBar/>
      <ProfileInfo/>
      <PostTypeBar/>
      <ProfilePosts/>
    </>
  )
}

export default App;
