import React,{useState} from 'react';
import axios from 'axios';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import PasswordField from 'material-ui-password-field'
// import {Link} from 'react-router-dom'
import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';
import SvgIcon from '@material-ui/core/SvgIcon';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub'
import { blue } from '@material-ui/core/colors';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GTranslateIcon from '@material-ui/icons/GTranslate';
// import google from './src./image./google';
import swal from 'sweetalert';

import HomeWorkIcon from '@material-ui/icons/HomeWork';




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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  button: {
    margin: theme.spacing(0, 80, 2),
  },
  home: {
    margin: theme.spacing(0,70,2),
    width: "200px",
    height: "100px",
  },
  space: {
    margin: theme.spacing(2)
  }
}));


export default function SignIn() {
  const classes = useStyles();
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('')
  const handleSignUp = (e)=>{
    e.preventDefault();
    const data={
        email:email,
        password:password
    }
    console.log("heloooo",data);
  
    axios.post("http://13.232.32.187:3050/login",data)
    .then((d)=>{
      console.log(d)
        if(d.data.result==="pass"){
          swal("Wrong password...", "", "error");
        }else if(d.data.result){
            swal({
                    title: "Wow!",
                    text: "Account logged in  successfully!",
                    type: "success"
                })
                .then((value) => {
                swal("click on home  button");
                });

        }
        else{
            swal("oppps!", "login failed!", "warning");
        }
    }).catch((err)=>{
        console.log(err);
    })
  }
//   const handleGoogle=()=>{
//     axios.get("http://localhost:3000/google")
//     .then(res=>{console.log(res);})
//     .catch(rerr=>{console.log(rerr);})
// }
  return (
    <Container component="main" maxWidth="xs">
      {/* <CssBaseline /> */}
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            className={classes.name}
            onChange={(e)=>{setemail(e.target.value)}}

            autoFocus
          />
          {/* console.log(name); */}
          {/* <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          /> */}

            <PasswordField
                hintText="At least 8 characters"
                label="password"
                floatingLabelText="Enter your password"
                errorText="Your password is too short"
                onChange={(e)=>{setpassword(e.target.value)}}
                style={{width:"410px"}}
            />  
          {/* <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          /> */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            // href="/HomePage"
            onClick={handleSignUp}

          >
            Sign In
          </Button>

          
          <IconButton aria-label="delete" href="http://localhost:3000/auth/facebook">
            <FacebookIcon variant="contained" color="primary" className={classes.space} >
                <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z" />
            </FacebookIcon>
            </IconButton>


           <IconButton aria-label="delete" marginRight="10px" href="http://localhost:3000/auth/github">
            <GitHubIcon variant="contained" color="primary"  className={classes.space}>
                <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z" />
            </GitHubIcon> 
            </IconButton>

            <IconButton aria-label="delete">
            <LinkedInIcon variant="contained" color="primary" className={classes.space} >
                <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z" />
            </LinkedInIcon> 
            </IconButton>

            <IconButton aria-label="delete"  href="http://localhost:3000/google">
            <GTranslateIcon variant="contained" color="primary" className={classes.space} >
                <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z" />
            </GTranslateIcon> 
            </IconButton>
            

            <IconButton aria-label="delete"  href="http://localhost:3001/Homepage"  className={classes.home}>
            <HomeWorkIcon variant="contained" color="primary"   >
                <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z" />
            </HomeWorkIcon> 
            </IconButton>

          {/* <button>G</button> <button>F</button> <button>GIT</button> <button>L</button> */}
          <Button variant="contained" color="primary" href="/signup" className={classes.button} >
            SIGNUP
            </Button>



          {/* <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid> */}
            {/* <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid> */}
        </form>
      </div>
      <Box mt={8}>
        {/* <Copyright /> */}
      </Box>
    </Container>
  );
}