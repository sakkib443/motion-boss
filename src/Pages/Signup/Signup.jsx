import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";



const Signup = () => {
    return (
        <div>

            <div>


                <div>
                    <div className="hero py-12 bg-base-200">
                        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <form className="card-body">

                                <div className="form-control">
                                    <label className="label text-center">
                                        <span className="label-text font-bold text-2xl text-center">Creat A New Account </span>
                                    </label>
                                    <input type="text" name='name' placeholder="Youe Name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">

                                    </label>
                                    <input type="text" name='photoUrl' placeholder="Photo Url" className="input input-bordered" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">

                                    </label>
                                    <input type="email" name='email' placeholder="Email or phone" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">

                                    </label>
                                    <input type="password" name='password' placeholder="Your password" className="input input-bordered" required />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control ">
                                    <input className='btn text-sm btn-secondary' type="submit" value='Register' />
                                </div>
                                <div className="divider">OR</div>
                            </form>
                            <div className="card-body -mt-16" >
                                <button className="btn border text-[16px] w-full mb-2 text-[#1d3153]">
                                    <FaGoogle className=' text-[#EB4235]' />
                                    Log in with Google
                                </button>
                            </div>
                            <div className='text-center -mt-8'><p>Have an account? Please<Link to='/login'><button className="btn btn-link">Login</button>
                            </Link> </p></div>

                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Signup;