import {useState} from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


 const Signup = () => {
  const [open, setOpen] = useState(false);

  //=============================================================================================================//
  //=============================================================================================================//

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //=============================================================================================================//
  //=============================================================================================================//

//   return (
//     <div>
//       <nav className="header__navigator">
//         <div className="registration__buttons">
//           <a className="login__button" href={handleClickOpen}>Login</a>
//           <a className="signup__button">Register</a>
//         </div>
//       </nav>

//       <Dialog
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="form-dialog-title"
//       ></Dialog>
//     </div>
//   );




return (
    <div>
    <nav className="header__navigator">
        <div className="registration__buttons">
        <span className="login__button" onClick={handleClickOpen}>Login</span>

        <span className="signup__button" onClick={handleClickOpen}>Sign up</span>
        </div>
    </nav>
 
      <Dialog open={open} onClose={handleClose}  fullWidth='true' maxWidth='xs' aria-labelledby="form-dialog-title">
        {/* <DialogTitle id="form-dialog-title">Create an Account</DialogTitle> */}
        <h1> Create an Account</h1>
        <DialogContent>
          <DialogContentText>
           Already have an account? Log in.
          </DialogContentText>
          <TextField
            autoFocus
            size='normal'
            variant='outlined'
            margin="dense"
            id="username"
            label="Username"
            type="email"
            fullWidth
          />
          <TextField

            size='normal'
            variant='outlined'
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
          />
          <TextField
            size='normal'
            variant='outlined'
            margin="dense"
            id="password"
            label="Password"
            type="email"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <button  style={{backgroundColor: 'gold'}} onClick={handleClose} >
            Cancel
          </button>
          <button style={{backgroundColor: 'gold'}} onClick={handleClose} >
            Create Account
          </button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Signup;