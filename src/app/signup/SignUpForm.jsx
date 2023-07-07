import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../App";
import { initializeApp } from "firebase/app"
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyC7bG4gePM6CNpEL3di_UMg6v7ms2ey2PE",
  authDomain: "checkov-lmkw.firebaseapp.com",
  projectId: "checkov-lmkw",
  storageBucket: "checkov-lmkw.appspot.com",
  messagingSenderId: "92584594559",
  appId: "1:92584594559:web:3bc7f1a80066896f6bc34a"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default function SignUpForm() {
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
    .then(response => {
      setUser(response.user);
      navigate("/");
    })
    .catch(err => alert(err.message))
  }

  const handleSignup = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    createUserWithEmailAndPassword(auth, email, password)
      .then(response => {
        setUser(response.user);
        navigate("/");
      })
      .catch(err => alert(err.message))
  }

  return(
    <section className="bg-rose-900 p-6 rounded-lg max-w-[420px] w-full mx-auto">
      <form onSubmit={handleSignup} className="flex flex-col items-start justify-around min-h-[25vh]">
        <label htmlFor="email" className="flex justify-between w-full">
          <span>Email</span>
          <input type="email" name="email" className="text-gray-900 rounded-lg border-transparent border border-orange-300 py-2 px-4 bg-gray-200 focus:ring-2 focus:ring-orange-300 focus:border-transparent"/>
        </label>
        <label htmlFor="password" className="flex justify-between w-full">
          <span>Password</span>  
          <input type="password" name="password" className="text-gray-900 rounded-lg border-transparent border border-orange-300 py-2 px-4 bg-gray-200 focus:ring-2 focus:ring-orange-300 focus:border-transparent"/>
        </label>
        <input type="submit" value="Sign Up" className="w-full bg-amber-400 text-gray-900 py-2 px-8 rounded-lg shadow-lg transition duration-300 hover:bg-amber-500 hover:shadow-sm cursor-pointer"/>
      </form>
      <button onClick={handleGoogle} className="w-full bg-cyan-400 text-gray-900 py-2 px-8 rounded-lg shadow-lg transition duration-300 hover:bg-cyan-500 hover:shadow-sm cursor-pointer">Sign Up With Google</button>
    </section>
  )
}
