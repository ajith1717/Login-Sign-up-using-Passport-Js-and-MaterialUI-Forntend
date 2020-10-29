import React,{useState} from 'react';
import axios from 'axios';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import PasswordField from 'material-ui-password-field'
import {Link} from 'react-router-dom';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import IconButton from '@material-ui/core/IconButton';
import SvgIcon from '@material-ui/core/SvgIcon';
import swal from 'sweetalert';


// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://material-ui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  button: {
    margin: theme.spacing(10, 80, 2),
  },
}));


export default function SignUp() {
  const classes = useStyles();
  const [name, setname] = useState('')
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('')

  const handleDetails=(e)=>{
      e.preventDefault();
    const data={
        name:name,
        email:email,
        password:password
    }
    console.log("heloooo",data);
  
    axios.post("http://13.232.32.187:3050/register",data)
    .then((d)=>{
        if(d.data.result){
            // swal({
            //     title: "Wow!",
            //     text: "Message!",
            //     type: "success"
            // }, function() {
            //     window.location = "redirectURL";
            // });
            swal({
                    title: "Wow!",
                    text: "Account create successfully!",
                    type: "success"
                })
                .then((value) => {
                swal("click on login button");
                });

        }
        else{
            swal("oppps!", "account already exist!", "warning");
        }
    }).catch((err)=>{
        console.log(err);
    })
  }
 
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                style={{width:"396px"}}
                id="Name"
                label="Name"
                value={name}
                onChange={(e)=>{setname(e.target.value)}}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              {/* <TextField
                // variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              /> */}
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                value={email}
                onChange={(e)=>{setemail(e.target.value)}}
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              {/* <TextField
                // variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              /> */}
              <PasswordField
                // hintText="At least 8 characters"
                label="password"
                // floatingLabelText="Enter your password"
                errorText="Your password is too short"
                style={{width:"396px"}}
                value={password}
                onChange={(e)=>{setpassword(e.target.value)}}
                />
            </Grid>
            {/* <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid> */}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            href="/login"
            onClick={handleDetails}
          >
            Sign Up
          </Button>
          <Button variant="contained" color="primary" href="/login" className={classes.button} >
            LOGIN
            </Button>

            
           
          {/* <Link to = '/login'> already account go to login</Link> */}
          {/* <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid> */}
        </form>
      </div>
      {/* <Box mt={5}>
        <Copyright />
      </Box> */}
    </Container>
  );
}