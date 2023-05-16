import React, { useContext } from 'react';
import logo from '../../assets/images/login/login.svg'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import SocialLogin from '../../shared/SocialLogin/SocialLogin';

const Login = () => {

    const { loginUser } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    console.log(location)
    const from = location.state?.from?.pathname

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        // console.log(email, password)

        loginUser(email, password)
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser)

                const loggedUse = {
                    email: loggedUser.email
                }
                fetch('http://localhost:5000/jwt', {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(loggedUse)
                })
                    .then(res => res.json())
                    .then(data => {
                        localStorage.setItem('car-user', data.token)
                        console.log('jwt token', data.token)
                    })
                navigate(from, { replace: true })
            })
            .catch(error => console.log(error.message))



    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className=" max-auto w-1/2">

                    <img src={logo} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl ml-6 bg-base-100">
                    <form onSubmit={handleSubmit}>
                        <div className="card-body">
                            <h1 className="text-5xl text-center font-bold">Login</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" required name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" required name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">

                                <input className="btn btn-primary" type="submit" value="Login" />
                            </div>
                        </div>
                    </form>
                    <p className='text-center mb-5'>New to car doctor? please <Link className='text-purple-400' to={'/signUp'}>SignUp</Link></p>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default Login;