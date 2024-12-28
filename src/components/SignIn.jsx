import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Link } from 'react-router-dom';

const SignIn = () => {


    const { signInUser } = useContext(AuthContext);

    const handleSignIn = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInUser(email, password)
            .then(result => {
                console.log(result.user)

                
                // Update Last Login Time

                
                // It is recommended to use optional chaining here to avoid Errors
                const lastSignInTime = result.user.metadata.lastSignInTime;

                // Sending the data from client side
                const loginInfo = { email, lastSignInTime };

                fetch(`http://localhost:5000/users`, {
                    method: 'PATCH',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(loginInfo)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log('Sign In Info Updated in the Database', data)
                    })
            })
            .catch(error => {
                console.log(error);
            })


    }




    return (
        <div>
            <h2 className='text-center font-bold pt-4'>Sign In</h2>
            <form onSubmit={handleSignIn} className="card-body">

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Sign In</button>
                </div>
                <p>New Coffee Drinker? <Link to={'/signup'} className='btn'>Sign Up</Link></p>
            </form>
        </div>
    );
};

export default SignIn;