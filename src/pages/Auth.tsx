import React, { FormEvent, useState } from 'react'
import { auth, authProvider } from '../config/firebase'
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const Auth = ():JSX.Element => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  // login with email
  const Login = async (e:FormEvent) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error(error);
    }
    setEmail("");
    setPassword("");
  }

  // login with google id
  const googleLogin = async () =>{
    try {
      await signInWithPopup(auth, authProvider);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div>
      <form onSubmit={Login}>
        <div className="flex">
          <input type="text" placeholder='Email...' value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className="flex">
          <input type="password" placeholder='Password...' value={password} onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <button type='submit'>Sign In</button>
      </form>
      <button onClick={googleLogin}>Sign In with Google</button>
    </div>
  )
}

export default Auth