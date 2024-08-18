import SideDrawer from './SideDrawer';
import './App.css';
import React from 'react';
import { useState } from 'react';

function App(props) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  let pageContents = props.contents;

  pageContents = React.cloneElement(pageContents, { isOpen: isSidebarOpen });


  return (
    <>
    <div className="side-drawer-container">
      <SideDrawer page={props.page} isOpen={isSidebarOpen} toggleSidebar={toggleSidebar}/>
    </div>
    {pageContents}
    </>
  )
}

export default App;
