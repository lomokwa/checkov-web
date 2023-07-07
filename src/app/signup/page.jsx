import { Link } from "react-router-dom";
import SignUpForm from "./SignUpForm";

export default function SignUp() {
    return (
        <main className="bg-rose-800 min-h-screen text-gray-50 px-4 py-8 text-center">
            <h1 className="text-3xl font-semibold mb-4 text-amber-400">SIGN UP</h1>
            <SignUpForm />
            <p className="mt-4">
                Already registered? <Link to="/login" className="text-sky-300">Login</Link>
            </p>
        </main>
    )
}
