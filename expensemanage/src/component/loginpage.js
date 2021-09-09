
import React from 'react';

class LoginBox extends React.Component{
    constructor(){
        super();
        this.state={username:'',password:''}
    }

    loginProcess(){
        if(this.state.username!="" && this.state.password!=""){
            //var datastore = catalyst.table;
            //var table = datastore.tableId(529000000005509);
            localStorage.setItem("userid","123")

        }
    }

    render(){
        return <div >
        <div className="loginparent">
             <div className="loginelem">
               <input onChange={(event)=>{this.setState({username:event.target.value})}} type="text" placeholder="Username" id="username"></input>
             </div>
             <div className="loginelem">
               <input  onChange={(event)=>{this.setState({password:event.target.value})}} type="password" placeholder="Password" id="password"></input>
             </div>
             <div className="loginelem">
               <button className="primary-button" id="login" onClick={this.loginProcess.bind(this)}>
                 Login
               </button>
               
             </div>
        </div>
       </div>
    }
}
export default LoginBox;