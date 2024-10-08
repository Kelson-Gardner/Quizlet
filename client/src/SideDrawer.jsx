import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LocalLibraryOutlinedIcon from '@mui/icons-material/LocalLibraryOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import './SideDrawer.css';
import TopBar from './TopBar';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Divider } from '@mui/material';
import StyleOutlinedIcon from '@mui/icons-material/StyleOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import MenuListComposition from './components/MenuListcomposition';

const drawerWidth = 240;

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

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);  

export default function SideDrawer(props) {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate()

  const topIcons = {
    0: <HomeOutlinedIcon />,
    1: <LocalLibraryOutlinedIcon />,
    2: <NotificationsNoneOutlinedIcon />,
  }

  const bottomIcons = {
    0: <StyleOutlinedIcon />,
    1: <SchoolOutlinedIcon />,
    2: <AssignmentOutlinedIcon />,
    3: <PlaylistAddCheckIcon />,
    4: <LogoutIcon onClick={logout} />
  }

  const bottomIconColors = {
    0: '#51cfff',
    1: '#51cfff',
    2: '#e372ff',
    3: '#ff983a',
    4: '#18ae79'
  }

  const links = {
    "Home": "/home",
    "Your Library": "/yourLibrary"
  }

  const handleDrawerOpen = () => {
    setOpen(true);
    props.toggleSidebar();
  };

  const handleDrawerClose = () => {
    setOpen(false);
    props.toggleSidebar();
  };

  const unHighlightedButton = (index, text, top) => {
    return (<ListItemButton
        onClick={() => navigate(links[text])}
        sx={{
          minHeight: 48,
          justifyContent: open ? 'initial' : 'center',
          px: 2.5,
        }}
        >
          {top === "top" ? 
        <ListItemIcon
        sx={{
          minWidth: '40px',
          width: '100%',
          mr: open ? 3 : 'auto',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '7.5px',
          borderRadius: '10px',
          color: 'white',
          '&:hover': {
            color: '#7583ff',
            backgroundColor: '#2e3856',
            '& .list-item-text': {
              color: '#7583ff',
              backgroundColor: '#2e3856',
            },
          }
        }}
        >
          {topIcons[index]}
          <ListItemText 
          className="list-item-text"
          primary={text}
          sx={{ 
            display: open ? 'auto' : 'none',
            marginLeft: '10px',
            '&:hover': {
              color: '#7583ff',
              backgroundColor: '#2e3856'
            }
            }} /> 
        </ListItemIcon>
        :
        <ListItemIcon
        sx={{
          minWidth: '40px',
          width: '100%',
          mr: open ? 3 : 'auto',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '7.5px',
          borderRadius: '10px',
          color: 'white',
          '&:hover': {
            color: bottomIconColors[index],
            backgroundColor: '#2e3856',
            '& .list-item-text': {
              color: bottomIconColors[index],
              backgroundColor: '#2e3856',
            },
          }
        }}
        >
          {bottomIcons[index]}
          <ListItemText 
          className="list-item-text"
          primary={text}
          sx={{ 
            display: open ? 'auto' : 'none',
            marginLeft: '10px',
            '&:hover': {
              color: bottomIconColors[index],
              backgroundColor: '#2e3856'
            }
            }} />
        </ListItemIcon>
          }
        </ListItemButton>
    )}
    
    const highlightedButton = (index, text, top) => {
      return (
        <ListItemButton
        sx={{
          minHeight: 48,
          justifyContent: open ? 'initial' : 'center',
          px: 2.5,
        }}
        >
        {top === "top" ?
        <ListItemIcon
          sx={{
            minWidth: '40px',
            width: '100%',
            mr: open ? 3 : 'auto',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '7.5px',
            borderRadius: '10px',
            color: '#7583ff',
            backgroundColor: '#2e3856 !important'
          }}
          >
            {topIcons[index]}
        <ListItemText 
        className="list-item-text"
        primary={text}
        sx={{ 
          display: open ? 'auto' : 'none',
          marginLeft: '10px',
          color: '#7583ff',
          backgroundColor: '#2e3856 !important'
          }} /> 
          </ListItemIcon>
          :
          <ListItemIcon
          sx={{
            minWidth: '40px',
            width: '100%',
            mr: open ? 3 : 'auto',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '7.5px',
            borderRadius: '10px',
            color: bottomIconColors[index],
            backgroundColor: '#2e3856 !important'
          }}
        >
          {bottomIcons[index]}
        <ListItemText 
        className="list-item-text"
        primary={text}
        sx={{ 
          display: open ? 'auto' : 'none',
          marginLeft: '10px',
          color: bottomIconColors[index],
          backgroundColor: '#2e3856 !important'
          }} />
        </ListItemIcon>
          }
        </ListItemButton>
      )
    }

  return (
    <Box sx={{ 
        display: 'flex',
        backgroundColor: '#0a092d'
        }}>
      <CssBaseline />
      <AppBar position="fixed" style={{backgroundColor: '#0a092d', boxShadow: 'none'}}>
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            onClick={open == true ? handleDrawerClose : handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              '&:hover': {
                backgroundColor: '#2e3856'
              }
            }}
          >
            <MenuIcon sx={{color: 'white'}} />
          </IconButton>
          <Typography 
          variant="h3" 
          noWrap 
          component="div" 
          sx={{fontWeight: 'bold'}}
          >
            <Link to={"/home"} 
            href="#"
            style={{textDecoration: 'none', color: 'white'}}
            >Quizlet</Link>
          </Typography>
          <TopBar />
          <MenuListComposition />
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open} style={{backgroundColor: '#0a092d', marginTop: '100px'}}>
        <DrawerHeader style={{backgroundColor: '#0a092d'}}>
        </DrawerHeader>
       <List>
          {['Home', 'Your Library', 'Notifications'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block', color: 'white' }}>
              {text.toLowerCase() == props.page ? highlightedButton(index, text, "top") : unHighlightedButton(index, text, "top")}
            </ListItem>
          ))}
        </List>
        <span style={{display: 'flex', justifyContent: 'center'}}>
        <Divider 
        sx={{
          borderBottomWidth: '2px',
          backgroundColor: 'rgb(100,100,100,.5)',
          width: '75%',
        }}/>
        </span>
          <List>
          <span style={{display: 'flex', justifyContent: 'flex-start'}}> 
        {open ? <div style={{color: 'white', marginLeft: '1.5rem'}}>Study with</div> : ""}
        </span>
            {['Flashcards', 'Learn', 'Study Guides', 'Practice Tests', 'Log out'].map((text, index) => (
              <ListItem key={text} disablePadding sx={{ display: 'block', color: 'white'}}>
                {text.toLowerCase() == props.page ? highlightedButton(index, test, "bottom") : unHighlightedButton(index, text, "bottom")}
              </ListItem>
            ))}
          </List>
      </Drawer>
    </Box>
  );
}