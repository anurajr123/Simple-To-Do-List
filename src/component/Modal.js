
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
// import { makeStyles } from '@material-ui/core/styles';
import React from "react";

export default function AlertDialog(props) {
  // const useStyles = makeStyles(() => ({
  //   paper: { minWidth: "500px" },
  // }));

  const { handleRemove, isOpen, handleClose } = props;
  return (
    <div>
      
      <Dialog 
        fullWidth
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Remove  Task"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Delete ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>
            No
            </Button>
          <Button onClick={handleRemove}> 
             Yes
          </Button> 
        </DialogActions>
      </Dialog>
  
    </div>
  );
}
