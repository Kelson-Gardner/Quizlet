import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { MenuItem } from '@mui/material';
import StyleOutlinedIcon from '@mui/icons-material/StyleOutlined';

const style = {
  position: 'fixed',
  top: '25%',
  left: '50%',
  borderRadius: '25px',
  color: 'white',
  transform: 'translate(-50%, -50%)',
  width: '50%',
  bgcolor: '#0a092d',
  boxShadow: 24,
  p: 4,
};

export default function SpringModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <MenuItem onClick={handleOpen}
      sx={{color: 'white',                       
      '&:hover' : {
      backgroundColor: 'rgb(100,100,100,.5)'
      }}}><StyleOutlinedIcon sx={{marginRight: '1rem'}}/>Flashcard Set</MenuItem>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        open={open}
        onClose={handleClose}
        sx={{
          backgroundColor: 'rgba(255, 255, 255, .3)',
        }}
      >
        <Box sx={style}>
          <Typography id="spring-modal-title" variant="h4" component="h2">
            How do you want to create your flashcard set?
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}