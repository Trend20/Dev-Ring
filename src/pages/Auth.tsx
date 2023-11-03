import { FormEvent, useState } from "react";
import { auth, authProvider } from "../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { FaLifeRing } from "react-icons/fa";
import { FcGoogle} from 'react-icons/fc'
import commImg from "../assets/images/comm.jpg";

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
    <div className="flex w-full m-auto bg-cyan-300 justify-between items-centre rounded">
      <div className="flex flex-col justify-center items-center w-1/2 p-10 m-auto min-h-screen text-cyan-300 bg-white">
        <div className="flex items-center flex-col">
          <i>
            <FaLifeRing size={50} fill="#000" />
          </i>
          <p className="text-black font-bold">DevRing</p>
        </div>
        <form
          onSubmit={Login}
          className="flex flex-col w-full justify-center items-center mt-14"
        >
          <div className="flex w-3/4">
            <input
              type="text"
              placeholder="Email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex rounded border px-6 py-3 w-full text-black outline-none"
            />
          </div>
          <div className="flex w-3/4">
            <input
              type="password"
              placeholder="Password..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="flex rounded border px-6 py-3 mt-10 w-full text-black outline-none"
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
          className="flex justify-center items-center border w-3/4 uppercase text-sm mt-12 font-bold text-black p-2"
        >
          <i className="px-6"><FcGoogle  size={40}/></i>
          Sign In with Google
        </button>
      </div>
      <div className="flex w-3/4 min-h-screen justify-center items-center flex-col">
        <img src={commImg} alt="login" />
        <p>We connect you to your local tech communities and events!</p>
      </div>
    </div>
  );
};

export default Auth;
