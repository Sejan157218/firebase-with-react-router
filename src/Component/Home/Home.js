import React from 'react';
import useAuth from '../../hooks/useAuth';

const Home = () => {
    const {user} = useAuth()
    return (
        <div>
            <h1>User Name : {user.displayName}</h1>
        </div>
    );
};

export default Home;