import * as React from 'react';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import SpringModal from './SpringModal';

export default function MenuListComposition() {
  const [open, setOpen] = React.useState(false);
  const [modalSpringOpen, setModalSpringOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }

  function openCreateFlashCardPopUp(){
    setModalSpringOpen(true);
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <Stack direction="row" spacing={2}>
      <div>
        <Button
          ref={anchorRef}
          id="composition-button"
          aria-controls={open ? 'composition-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
          variant="contained"
          width='10px'
          sx={{
            width: '36px',
            height: '36px',
            minWidth: '36px',
            borderRadius: '7.5px',
            marginLeft: '10rem',
            backgroundColor: 'rgb(66, 85, 255)',
            '&:hover': {
              backgroundColor: 'rgb(66, 85, 255, .7)'
            }
          }}
        >
          <AddIcon />
        </Button>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'bottom-start' ? 'left top' : 'left bottom',
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                    sx={{
                      borderRadius: '5px',
                      border: '1px solid rgb(175,230,230,.4)',
                    }}
                  >
                    {/* {modalSpringOpen ? <SpringModal /> : <></>} */}
                    <SpringModal />
                    <MenuItem onClick={handleClose} 
                    sx={{color: 'white',                       
                      '&:hover' : {
                        backgroundColor: 'rgb(100,100,100,.5)'
                      }}}
                    ><AssignmentOutlinedIcon sx={{marginRight: '1rem'}}/>Study guide</MenuItem>
                    <MenuItem onClick={handleClose} 
                    sx={{color: 'white',                       
                      '&:hover' : {
                        backgroundColor: 'rgb(100,100,100,.5)'
                      }}}
                    ><PlaylistAddCheckIcon sx={{marginRight: '1rem'}}/>Practice test</MenuItem>
                    <MenuItem onClick={handleClose} 
                    sx={{color: 'white',                       
                      '&:hover' : {
                        backgroundColor: 'rgb(100,100,100,.5)'
                      }}}
                    ><FolderOutlinedIcon sx={{marginRight: '1rem'}}/>Folder</MenuItem>
                    <MenuItem onClick={handleClose} 
                    sx={{color: 'white',                       
                      '&:hover' : {
                        backgroundColor: 'rgb(100,100,100,.5)'
                      }}}
                    ><PeopleAltOutlinedIcon sx={{marginRight: '1rem'}}/>Class</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </Stack>
  );
}
