import { Link } from "react-router-dom"
import LoginForm from "./LoginForm"

export default function Login() {
    return (
        <main className="bg-rose-800 min-h-screen text-gray-50 px-4 py-8 text-center">
            <h1 className="text-3xl font-semibold mb-4 text-amber-400">LOGIN</h1>
            <LoginForm className="text-gray-950"/>
            <p className="mt-4">
                Need an Account? <Link to="/signup" className="text-sky-300">Sign Up Here</Link>
            </p>
        </main>
    )
}