import React, { Component } from 'react';
import axios from 'axios';




export default class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: ''
    }
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username
    }

    console.log(user);

    axios.post('http://localhost:3001/newuser', user)
      .then(res => console.log(res.data));

    this.setState({
      username: ''
    })
  }
}
// render(){
//   return(
//     <form action="action_page.php" method="post">
//       <div class="imgcontainer">
//         <img src="img_avatar2.png" alt="Avatar" class="avatar"></img>
//       </div>

//       <div class="container">
//         <label for="uname"><b>Username</b></label>
//         <input type="text" placeholder="Enter Username" name="uname" required></input>

//         <label for="psw"><b>Password</b></label>
//         <input type="password" placeholder="Enter Password" name="psw" required></input>

//         <button type="submit">Login</button>
//         <label>
//           <input type="checkbox" checked="checked" name="remember"> Remember me</input>
//         </label>
//       </div>

//       <div class="container" style="background-color:#f1f1f1">
//         <button type="button" class="cancelbtn">Cancel</button>
//         <span class="psw">Forgot <a href="#">password?</a></span>
//       </div>
//     </form>
//   )} 
// }  
