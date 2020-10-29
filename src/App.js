import React from 'react'
import {Route, BrowserRouter as Router} from "react-router-dom";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import HomePage from "./components/Home";
import './App.css';

function App() {
    console.log("come 12 3")
    return (
        <Router>
            <Route path="/login" component={Login} />
            <Route path="/signup" exact component={SignUp} />
            <Route path="/HomePage" exact component={HomePage} />

        </Router>
    )
}

export default App


// import React,{Component} from 'react';
// import logo from './logo.svg';
// import './App.css';
// import { Grid, TextField , CardContent} from '@material-ui/core';
// import {PasswordField} from 'material-ui-password-field';
// import styles from './App.css';
// import SignUp from './components/SignUp';


// export class App extends Component {
//   render() {
//     return (
//       <div>
//         <SignUp />
//       </div>
//     )
//   }
// }

// export default App


// // const passWord = {
// //   width : "150px"
// // }

// // const inputProps = {
// //   step: 800,
// // };
// // class App extends Component {
// //   constructor(props) {
// //     super(props)
// //     this.state = {
// //       name : '',
// //       email : '',
// //       password:'',
// //       message:"",
// //    }
// //   }

// //   changehandlername =(event)=>{
// //     this.setState ({
// //       name : event.target.value
// //     })
// //   }

// //   changehandlerpassword = (event)=>{
// //     this.setState({
// //       password : event.target.value

// //     })  

// //   } 

  
// //   render() {
// //     return (
// //       <div className="app">
       
// //       <Grid container item xs={12} sm={6}  className={styles.card} alignItems="center" direction="column" style={{paddingLeft: "100"}} >
// //         <CardContent>
// //             <TextField label="Username" margin="normal" color="secondary" inputProps={inputProps} onChange={this.changehandlername} /><br></br>
// //             <TextField label="Password" margin="normal" color="secondary" inputProps={inputProps} />
// //         </CardContent>

// //       </Grid>
      
// //     </div>
// //     )
// //   }
// // }

// // export default App




// // <Grid container style={{minHeight:"600px"}}>
// // <Grid items xs={12} sm={6}>
// //   {/* <img 
// //     src="https://images.unsplash.com/photo-1497250681960-ef046c08a56e?ixlib=rb-1.2.1&w=1000&q=80" 
// //     style={{width:'100%',height:"100%",objectFit:"cover" }} 
// //     alt="brand">
// //   </img> */}
// //   {/* <Paper style={styles.paperContainer}>

// //   </Paper> */}
// // </Grid>
// // <Grid container item xs={12} sm={6} justify="space-between" alignItems="cenetr" direction="column" styple={{padding :10}} />
// // <div />
// // <div>
// //   {/* <Grid container justify="center">
// //     <img src="https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg" width={200} alt="logo" />
// //   </Grid> */}
// //   <TextField label="Username" margin="normal" color="black" />
// //   <TextField label="Password" margin="normal" color="black" />