import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Login = () => {
    const {login}= useContext(AuthContext);


    const hadelLogin=(event)=>{
        event.preventDefault();
        const form = event.target;

        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
        .then(result=>{
            const user= result.user;
            console.log(user);
        })
        .catch(error=>{
            console.error(error);
        })
    }

    return (
        <div className="hero w-full my-20">
            <div className="hero-content grid gap-20 grid md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    
                    <img src={img} alt=''/>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100  p-10">
                    <h1 className="text-5xl text-center font-bold">Login!</h1>
                    <form onSubmit={hadelLogin} className="card-body">
                    
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login" />
                            
                        </div>
                    </form>
                    <p className='text-center'>New to Genius Car <Link to="/signup" className='font-bold text-orange-600 '>Sing up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;