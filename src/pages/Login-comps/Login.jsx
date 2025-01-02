import { Link, useNavigate } from 'react-router-dom';
import images from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';


const Login = () => {

    const { signIn} = useContext(AuthContext);
    const navigate = useNavigate();


    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                e.target.reset();
                navigate('/');

            }).catch(error => console.log(error));


    }
    return (
        <div className='mt-14'>
            <div className="min-h-screen flex flex-col justify-center items-center">
                <div className="flex flex-col lg:flex-row justify-between gap-x-14 items-center mx-0 gap-y-6">
                    <div className="flex-1">
                        <img className='w-full' src={images} alt="" />
                    </div>
                    <div className="card w-full flex-1 border-2 border-gray-300 lg:p-16 md:p-5 p-2 shadow-none ">
                        <h2 className='text-3xl text-gray-700 font-bold text-center'>Login</h2>
                        <form className="card-body" onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className='btn bg-[#FF3811] px-5 py-3 text-white' type="submit" value="Sign in" />
                            </div>
                        </form>

                        <p className='text-gray-700 text-center'>New to us? <Link to={'/signup'} className='text-orange-600 font-bold'>Sign Up</Link></p>

                    </div>
                </div>
            </div>
           

        </div >
    );
};

export default Login;