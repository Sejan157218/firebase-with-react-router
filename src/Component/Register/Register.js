import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <h1>Register</h1>
            <input type="text" />
            <br />
            <input type="password" />
            <br />
            <button>Google sign in</button>
            <br />
            <Link to="/login">Already have account?</Link>
        </div>
    );
};

export default Register;