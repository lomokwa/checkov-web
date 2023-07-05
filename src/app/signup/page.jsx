import { Link } from "react-router-dom";
import SignUpForm from "./SignUpForm";

export default function SignUp() {
    return (
        <main>
            <h1>SIGN UP</h1>
            <SignUpForm />
            Already registered? <Link to="/login">Login</Link>
        </main>
    )
}
