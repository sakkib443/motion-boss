import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { signInWithPopup } from "firebase/auth";

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from || { pathname: "/" }; // Default to "/" if state is undefined

    const { signIn,signInWithGoogle } = useAuth(); 
    const handleSignin = async event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        try {
            const result = await signIn(email, password);
            const user = result.user;
            console.log(user);
            Swal.fire({
                title: "Login successfully",
                text: "Welcome to Motion Boss",
                icon: "success"
            });
            navigate(from, { replace: true });
            // Redirect user to the previous location or perform any necessary actions upon successful sign-in
        } catch (error) {
            console.error("Sign-in error:", error);
            Swal.fire({
                title: "Something Wrong",
                text: "Please Try Again",
                icon: "error"
            });
            // Display error message to the user
        }
    };
    const handleGoogleSignin = ()=>{
        signInWithGoogle()
        .then((result) => {
            // Handle successful Google sign-in
            console.log("Google sign-in successful:", result.user);
            Swal.fire({
                title: "Login successfully",
                text: "Welcome to Motion Boss",
                icon: "success"
            });
            navigate('/');
            
        })
        .catch((error) => {
            // Handle errors
            console.error("Google sign-in error:", error);
            Swal.fire({
                title: "Something Wrong",
                text: "Please Try Again",
                icon: "error"
            });
        });
    }

    return (
        <div>
            <div className="hero pt-12 pb-40 bg-base-200">
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Email or phone" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="Your password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control ">
                            <input className='btn text-[16px] btn-secondary' type="submit" value='Login' />
                        </div >
                        <div className="divider">OR</div>
                    </form>
                    <div className="card-body -mt-16">
                        <button onClick={handleGoogleSignin} className="btn border text-[16px] w-full mb-2 text-[#1d3153]">
                            <FaGoogle className=' text-[#EB4235]' />
                            Log in with Google
                        </button>
                    </div>
                    <div className='text-center -mt-6'>
                        <p>New here? Please
                            <Link to='/signup'>
                                <button  className="btn btn-link">Register</button>
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
