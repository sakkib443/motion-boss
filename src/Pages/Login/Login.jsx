import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
// import { FaFacebook } from "react-icons/fa6";



const Login = () => {
    return (

        <div>

            <div>
                <div className="hero pt-12 pb-40 bg-base-200">
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body">
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
                       
                        <div className="card-body -mt-16" >
                            <button className="btn border text-[16px] w-full mb-2 text-[#1d3153]">
                                <FaGoogle className=' text-[#EB4235]' />
                                Log in with Google
                            </button>
                        </div>

                        <div className='text-center -mt-6'><p>New hare? Please<Link to='/signup'><button className="btn btn-link">Register</button>
                        </Link> </p></div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;