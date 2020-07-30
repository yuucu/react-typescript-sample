import React from 'react';
import './App.css';
import { Typography, TextField, Button, CssBaseline, Container, DialogTitle, Dialog } from '@material-ui/core';

type HelloDialogProps = {
open: boolean;
name: string;
onClose: () => void;
}

function HelloDialog(props: HelloDialogProps) {
  const { open, name, onClose } = props;

  return (
      <Dialog onClose={onClose} open={open}>
      <DialogTitle>ご挨拶</DialogTitle>
      <Typography variant="h5">こんにちわ、{name}さん！</Typography>
      </Dialog>
      );
}


function App() {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
  <Container maxWidth="sm" >
    <CssBaseline />
    <Typography variant="h5">hello</Typography>
    <form>
    <TextField
      label="name"
      name="name"
      variant="outlined"
      size="small"
      fullWidth
      margin="normal" />
    <Button
      variant="contained"
      color="primary"
      fullWidth
      onClick={handleClickOpen}>
      Click!
    </Button>
    <HelloDialog open={open} name={"TODO"} onClose={handleClose} />
    </form>
    </Container>
  );
}

export default App;
