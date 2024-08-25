import '../PageContents.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

function YourLibrary(props){
    const [value, setValue] = React.useState('1');
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return(
    <>
        <h1 className= {props.isOpen ? "is-open" : "not-open"}>
            Your Library
        </h1>
        <div className={`library-content-container${props.isOpen ? "-shifted" : ""}`}>
            <Box sx={{ width: '75%', typography: 'body1' }}>
            <TabContext value={value} >
                <Box sx={{ borderBottom: 1, borderColor: 'rgb(100,100,100,.3)', borderWidth: '2px'}}>
                <TabList onChange={handleChange} aria-label="your library pages" 
                sx={{ 
                    '& .MuiTab-root': { color: 'rgb(175,230,230,.2)' },
                    '& .Mui-selected': { color: 'white' },
                    '& .MuiTabs-indicator': { backgroundColor: '#7583ff' }
                }}>
                    <Tab label="Flashcard Sets" value="1" />
                    <Tab label="Practice Tests" value="2" />
                    <Tab label="Study Guides" value="3" />
                </TabList>
                </Box>
                {/* TODO: implement the seperate pages as different components */}
                <TabPanel value="1">Flashcard Sets</TabPanel>
                <TabPanel value="2">Practice Tests</TabPanel>
                <TabPanel value="3">Study Guides</TabPanel>
            </TabContext>
            </Box>
        </div>
    </>
    )
}

export default YourLibrary;