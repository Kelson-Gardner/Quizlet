import SideDrawer from './SideDrawer';
import './App.css';

function App(props) {

  return (
    <>
    <div className="side-drawer-container">
      <SideDrawer page={props.page}/>
    </div>
    </>
  )
}

export default App;
