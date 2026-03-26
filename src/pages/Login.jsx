
import { useState } from "react";
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate, Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const provider = new GoogleAuthProvider();


  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/courses");
    } catch (error) {
      alert(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate("/courses");
    } catch (error) {
      alert(error.message);
    }
  };

 
  const handleForgotPassword = async () => {
    if (!email) return alert("Enter your email first");

    try {
      await sendPasswordResetEmail(auth, email);
      alert("Password reset email sent!");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-r from-gray-100 to-gray-200">
      
      <div className="bg-white p-8 rounded-2xl shadow-xl w-96">
        
        <h2 className="text-3xl font-bold text-center mb-2">
          Welcome Back 👋
        </h2>

        <p className="text-center text-gray-500 mb-6">
          Login to continue learning
        </p>

      
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 mb-4 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 mb-2 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
          />

          <p
            onClick={handleForgotPassword}
            className="text-sm text-blue-600 cursor-pointer mb-4"
          >
            Forgot Password?
          </p>

          <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition">
            Login
          </button>
        </form>

     
        <div className="flex items-center my-5">
          <hr className="flex-1" />
          <span className="px-3 text-gray-400 text-sm">OR</span>
          <hr className="flex-1" />
        </div>

    
        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-3 border py-3 rounded-lg hover:bg-gray-100 transition"
        >
          <FcGoogle size={20} />
          Continue with Google
        </button>

        <p className="text-center text-sm mt-6">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-green-600 font-medium">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;