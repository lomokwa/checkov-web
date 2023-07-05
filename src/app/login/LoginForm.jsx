import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../App";
import { initializeApp } from "firebase/app"
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth"

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

export default function LoginForm() {
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

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInWithEmailAndPassword(auth, email, password)
      .then(response => {
        setUser(response.user);
        navigate("/");
      })
      .catch(err => alert(err.message))
  }

  return(
    <main>
      <form onSubmit={handleLogin}>
        <label htmlFor="email">
          Email
          <input type="email" name="email" />
        </label>
        <br />
        <label htmlFor="password">
          Password  
          <input type="password" name="password" />
        </label>
        <br />
        <input type="submit" value="Login" />
      </form>
      <button onClick={handleGoogle}>Login With Google</button>
    </main>
  )
}
