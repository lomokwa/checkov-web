import { Link } from "react-router-dom"

export default function Login() {
    return (
        <main>
            <h1>LOGIN</h1>
            Need an Account? <Link to="/signup">Sign Up Here</Link>
        </main>
    )
}