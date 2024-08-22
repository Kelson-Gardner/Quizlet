import { BorderAllRounded } from '@mui/icons-material';
import './PageContents.css';
import { Box, Paper } from '@mui/material';


function Home(props){

    return(
        <>
        <h3 className = {props.isOpen ? "is-open" : "not-open"}>
            Recent
        </h3>
        <Box
        sx={{
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': {
            m: 1,
            width: '20rem',
            height: '10rem',
            backgroundColor: 'rgb(175,230,230,.2)',
            marginLeft: '150px',
            borderRadius: '8px'
            },
        }}
        >
            {/* These will be the recent fashcard sets that the user has visited */}
        <Paper elevation={3} />
        </Box>
        </>
    )
}

export default Home;