import SideDrawer from './SideDrawer';
import './App.css';

function App(props) {

  const pageContents = props.contents;

  return (
    <>
    <div className="side-drawer-container">
      <SideDrawer page={props.page}/>
    </div>
    {pageContents}
    </>
  )
}

export default App;
