import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const Login = () => {
    const { handlerGoogleSignIn, handlerGithubSignIn } = useAuth();
    return (
        <div>
            <h1>Login</h1>
            <input type="text" />
            <br />
            <input type="password" />
            <br />
            <button onClick={handlerGoogleSignIn}>Google sign in</button>
            <button onClick={handlerGithubSignIn}>Github sign in</button>
            <br />
            <Link to="/register">New User</Link>
        </div>
    );
};

export default Login;