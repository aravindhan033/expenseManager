
import { React, useState } from 'react';
import { collection, doc, setDoc, getDocs } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
function LoginBox() {

  const db = getFirestore();

  let userdetails = { username: "", password: "" };
  async function loginProcess() {
    userdetails = { username: document.getElementById("username").value, password: document.getElementById("password").value };
    if (userdetails.username != "" && userdetails.password != "") {
      let isValid = false;
      const querySnapshot = await getDocs(collection(db, "user"));
      querySnapshot.forEach((doc) => {
        if (doc.data().username == userdetails.username && doc.data().password == userdetails.password) {
          isValid = true;
          localStorage.setItem("userid", doc.id);
          localStorage.setItem("username", doc.data().username);
        }
      });

      if (isValid) {
        window.location = "/home";
      }


    }
  }




  return <div >
    <div className="loginparent" id="loginparent">
      <div className="loginelem">
        <input type="text" placeholder="Username" id="username"></input>
      </div>
      <div className="loginelem">
        <input type="password" placeholder="Password" id="password"></input>
      </div>
      <div className="loginelem">
        <button className="primary-button" id="login" onClick={loginProcess}>
          Login
        </button>

      </div>
    </div>
  </div>

}
export default LoginBox;