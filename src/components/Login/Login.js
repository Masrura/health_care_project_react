import React from 'react';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { signInWithGoogle } = useAuth();
    return (
        <div>
            <h2>This is login</h2>
            <button onClick={signInWithGoogle}>Google Sign In</button>
        </div>
    );
};

export default Login;