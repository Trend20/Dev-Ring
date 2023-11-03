import { FormEvent, useState } from "react";
import { auth, authProvider } from "../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { FaLifeRing} from 'react-icons/fa'

const Auth = (): JSX.Element => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // login with email
  const Login = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error(error);
    }
    setEmail("");
    setPassword("");
  };

  // login with google id
  const googleLogin = async () => {
    try {
      await signInWithPopup(auth, authProvider);
    } catch (error) {
      console.error(error);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="flex w-1/2 m-auto bg-cyan-300 justify-between items-centre rounded">
      <div className="flex flex-col justify-center items-center w-1/2 p-10 m-auto h-auto text-cyan-300 bg-white">
      <div className="flex items-center flex-col">
        <i><FaLifeRing size={50} fill="#000"/></i>
        <p className="text-black font-bold">DevRing</p>
      </div>
        <form
          onSubmit={Login}
          className="flex flex-col w-full justify-center items-center mt-14"
        >
          <div className="flex w-full">
            <input
              type="text"
              placeholder="Email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex rounded border px-6 py-3 w-full"
            />
          </div>
          <div className="flex w-full">
            <input
              type="password"
              placeholder="Password..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="flex rounded border px-6 py-3 mt-10 w-full"
            />
          </div>
          <button
            type="submit"
            className="bg-black rounded-br-lg text-cyan-300 font-bold flex justify-center items-center border w-40 mt-5 p-2 h-14"
          >
            Sign In
          </button>
        </form>
        <button
          onClick={googleLogin}
          className="flex justify-center items-center border w-60 mt-5 p-2"
        >
          Sign In with Google
        </button>
      </div>
      <div className="flex w-3/4">
        <p>We connect you to your local tech communities and events!</p>
      </div>
    </div>
  );
};

export default Auth;
