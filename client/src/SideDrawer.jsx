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

const drawerWidth = 240;

const icons = {
  0: <HomeOutlinedIcon />,
  1: <LocalLibraryOutlinedIcon />,
  2: <NotificationsNoneOutlinedIcon />
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

export default function SideDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

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
          <Typography variant="h3" noWrap component="div" sx={{fontWeight: 'bold'}}>
           Quizlet
          </Typography>
          <TopBar />
          <Button
      variant="contained"
      width='10px'
      sx={{
        width: '36px',      // Set width
        height: '36px',     // Set height equal to width for a square
        minWidth: '36px',   // Prevent the button from shrinking
        borderRadius: '7.5px', // Optional, customize the border-radius if you want rounded corners
        marginLeft: '10rem',
        backgroundColor: 'rgb(66, 85, 255)',
        '&:hover': {
          backgroundColor: 'rgb(66, 85, 255, .7)'
        }
      }}
          ><AddIcon /></Button>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open} style={{backgroundColor: '#0a092d', marginTop: '100px'}}>
        <DrawerHeader style={{backgroundColor: '#0a092d'}}>
        </DrawerHeader>
       <List>
          {['Home', 'Your Library', 'Notifications'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block', color: 'white' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: '40px',
                    width: '100%',
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
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
                  {icons[index]}
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
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}