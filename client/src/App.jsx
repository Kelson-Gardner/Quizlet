import SideDrawer from './SideDrawer';
import TopBar from './TopBar';
import './App.css';

function App() {

  async function logout() {
    const res = await fetch("/registration/logout/", {
      credentials: "same-origin", // include cookies!
    });

    if (res.ok) {
      // navigate away from the single page app!
      window.location = "/registration/sign_in/";
    } else {
      // handle logout failed!
    }
  }

  return (
    <>
    <div className="top-bar-container"> 
      <TopBar />
    </div>
    <div className="side-drawer-container">
      <SideDrawer />
    </div>
    </>
  )
}

export default App;
