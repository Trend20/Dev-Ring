import {ChangeEvent, FormEvent, useState} from "react";
import { auth, authProvider } from "../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { FaLifeRing } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import {NavigateFunction, useNavigate} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthPageDesc from "../components/AuthPageDesc";

type FormData = {
  email: string
  password: string
}

const Auth = (): JSX.Element => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const navigate: NavigateFunction = useNavigate()

  // login with email
  const Login = async (e: FormEvent):Promise<void> => {
    e.preventDefault();
    if(email === "" || password === ''){
      setError(true)
    }
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      if(user){
        console.log(user);
        successNotify()
        navigate('/update');
      }else{
        errorNotify()
      }
    } catch (error) {
      console.error(error);
    }
    setEmail("");
    setPassword("");
  };

  // login with Google id
  const googleLogin = async ():Promise<void> => {
    try {
      const user = await signInWithPopup(auth, authProvider);
      if(user){
        console.log(user);
        navigate('/profile');
      }else{
        errorNotify()
      }
    } catch (error) {
      console.error(error);
    }

  };

  // alert
  const errorNotify = () =>{
    toast.error("Invalid user credentials !", {
      position: toast.POSITION.TOP_LEFT
    });
  }

  const successNotify = () =>{
    toast.error("Invalid user credentials !", {
      position: toast.POSITION.TOP_LEFT
    });
  }

  // const logout = async ():Promise<void> => {
  //   try {
  //     await signOut(auth);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  return (
    <div className="flex w-full m-auto bg-cyan-200 justify-between items-centre rounded max-md:flex-col-reverse">
      <ToastContainer />
      <div className="flex flex-col justify-center items-center w-1/2 p-10 m-auto min-h-screen text-cyan-300 bg-white max-md:w-full">
        <div className="flex items-center flex-col cursor-pointer" onClick={() => navigate('/')}>
          <i>
            <FaLifeRing size={50} fill="#000" />
          </i>
          <p className="text-black font-bold">DevRing</p>
        </div>
        {
          error ? <p className="flex mt-5 bg-red-700 text-white p-2 rounded-r-lg">Please provide the required details</p> : ''
        }
        <form
          onSubmit={Login}
          className="flex flex-col w-full justify-center items-center mt-14"
        >
          <div className="flex w-3/4 max-md:w-full">
            <input
              type="text"
              placeholder="Email..."
              value={email}
              onChange={(e:ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
              className={error? "flex rounded border border-red-700 px-6 py-3 w-full text-black outline-none" : "flex rounded border px-6 py-3 w-full text-black outline-none"}
            />
          </div>
          <div className="flex w-3/4 max-md:w-full">
            <input
              type="password"
              placeholder="Password..."
              value={password}
              onChange={(e:ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
              className={error? "flex rounded border border-red-700 px-6 py-3 mt-10 w-full text-black outline-none" : "flex rounded border  px-6 py-3 mt-10 w-full text-black outline-none"}
            />
          </div>
          <button
            type="submit"
            className="bg-black rounded-br-lg text-cyan-300 font-bold uppercase flex justify-center items-center border w-40 mt-5 p-2 h-14"
          >
            Sign In
          </button>
        </form>
        <button
          onClick={googleLogin}
          className="flex justify-center items-center border-2 border-cyan-300 rounded-r-lg w-72 uppercase text-sm mt-12 font-bold text-black p-2 max-md:w-full"
        >
          <i className="px-6">
            <FcGoogle size={40} />
          </i>
          Sign In with Google
        </button>
      </div>
      <AuthPageDesc />
    </div>
  );
};

export default Auth;
