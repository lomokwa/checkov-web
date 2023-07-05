import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../App";
import { initializeApp } from "firebase/app"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyC7bG4gePM6CNpEL3di_UMg6v7ms2ey2PE",
  authDomain: "checkov-lmkw.firebaseapp.com",
  projectId: "checkov-lmkw",
  storageBucket: "checkov-lmkw.appspot.com",
  messagingSenderId: "92584594559",
  appId: "1:92584594559:web:3bc7f1a80066896f6bc34a"
};

export default function SignUpForm() {
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, email, password)
      .then(response => {
        setUser(response.user);
        navigate("/");
      })
      .catch(err => alert(err.message))
  }

  return(
    <form onSubmit={handleSignup}>
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
      <input type="submit" value="Sign Up" />
    </form>
  )
}
