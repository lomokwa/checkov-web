import { Link } from "react-router-dom"
import LoginForm from "./LoginForm"

export default function Login() {
    return (
        <main>
            <h1>LOGIN</h1>
            <LoginForm />
            Need an Account? <Link to="/signup">Sign Up Here</Link>
        </main>
    )
}