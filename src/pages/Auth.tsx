import {ChangeEvent, FormEvent, useState} from "react";
import { auth, authProvider } from "../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { FaLifeRing } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

type FormData = {
  email: string
  password: string
  error: boolean
}

const Auth = (): JSX.Element => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  // login with email
  const Login = async (e: FormEvent):Promise<void> => {
    e.preventDefault();
    if(email === "" || password === ''){
      setError(true)
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error(error);
    }
    setEmail("");
    setPassword("");
  };

  // login with Google id
  const googleLogin = async ():Promise<void> => {
    try {
      await signInWithPopup(auth, authProvider);
    } catch (error) {
      console.error(error);
    }
  };

  // const logout = async ():Promise<void> => {
  //   try {
  //     await signOut(auth);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  return (
    <div className="flex w-full m-auto bg-cyan-200 justify-between items-centre rounded max-md:flex-col-reverse">
      <div className="flex flex-col justify-center items-center w-1/2 p-10 m-auto min-h-screen text-cyan-300 bg-white max-md:w-full">
        <div className="flex items-center flex-col">
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
              className={error? "flex rounded border border-red-700 px-6 py-3 w-full text-black outline-none" : "flex rounded border border-black px-6 py-3 w-full text-black outline-none"}
            />
          </div>
          <div className="flex w-3/4 max-md:w-full">
            <input
              type="password"
              placeholder="Password..."
              value={password}
              onChange={(e:ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
              className={error? "flex rounded border border-red-700 px-6 py-3 mt-10 w-full text-black outline-none" : "flex rounded border border-black px-6 py-3 mt-10 w-full text-black outline-none"}
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
          className="flex justify-center items-center border rounded-r-lg w-3/4 uppercase text-sm mt-12 font-bold text-black p-2 max-md:w-full"
        >
          <i className="px-6">
            <FcGoogle size={40} />
          </i>
          Sign In with Google
        </button>
      </div>
      <div className="flex w-3/4 min-h-screen flex-col p-10 justify-center items-start max-md:w-full max-md:p-3 max-md:max-h-80 max-md:hidden">
        <h3 className="text-5xl font-bold w-full max-md:text-4xl">
          We connect you to your local tech communities and events!
        </h3>
        <p className="w-3/4 mt-10 leading-8 text-lg max-md:w-full max-md:mt-5 max-md:leading-6">
          Join DevRing today and unlock the full potential of your local
          developer community. Start building meaningful connections, fostering
          professional growth, and discovering new opportunities in your
          tech-savvy neighborhood. <strong>DevRing</strong> - Where Local Meets Digital!
        </p>
      </div>
    </div>
  );
};

export default Auth;
