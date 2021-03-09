import {useState} from 'react'
import axios from 'axios';
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
 const createAccountSubmitButton = async ()=>{
console.log('button')
const signUpAPI ={
  method: 'get',
  url: '127.0.0.1:8080/api/signup'
}

let response = await axios(signUpAPI)
console.log(response)
}




return (
    <div>

        <span className="signup__button" onClick={handleClickOpen}>Sign up</span>

      <Dialog open={open} onClose={handleClose} fullWidth={true} maxWidth='xs'  aria-labelledby="form-dialog-title">
        
        <DialogContent>
          <DialogTitle id="form-dialog-title"><h1>Create an Account</h1> </DialogTitle>
          <DialogContentText>
       
          </DialogContentText>
          <hr/>


{/* //=============================================================================================================// */}
{/* //=============================================================================================================// */}
          <TextField
            // autoFocus
            // size='normal'
            variant='outlined'
            margin="dense"
            id="username"
            label="Username"
            // type="email"
            fullWidth
          />

          {/* <hr/> */}
          <TextField

            // size='normal'
            variant='outlined'
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
          />
          <br/>
          <TextField
            // size='normal'
            variant='outlined'
            margin="dense"
            id="password"
            label="Password"
            type="password"
            fullWidth
          />
          <TextField
            // size='normal'
            variant='outlined'
            margin="dense"
            id="confirm password"
            label="Confirm Password"
            type="password"
            fullWidth
          />
          <hr/>

        <h3>Already have an account? <a href="">Click here to Log In.</a></h3>
        </DialogContent>
        <hr/>
      <hr/>
      <hr/>
      <hr/>

{/* //=============================================================================================================// */}
{/* //=============================================================================================================// */}

        <DialogActions>
          <button  style={{backgroundColor: 'gold', fontSize:'15px', borderRadius:'7px', padding: '10px'}} onClick={handleClose} >
           {'<<<< ❌ Sign up Later'}
          </button>
          <button style={{backgroundColor: 'gold',  fontSize:'15px', borderRadius:'7px', padding: '10px'}} onClick={createAccountSubmitButton} >
            Create Account ➕
          </button>
        </DialogActions>
      <hr/>
      <hr/>
      <hr/>
      </Dialog>
    </div>



  );
};

export default Signup;