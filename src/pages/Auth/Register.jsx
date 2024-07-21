// src/components/auth/Signup.jsx
import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/firebaseConfig';
import { toast } from 'react-toastify';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cPassword, setCPassword] = useState('');

    const handleSignup = async (e) => {
        e.preventDefault();
        if (!password || !cPassword || !email) {
            return toast.error('please fill all field');
        }
        if (password !== cPassword) {
            return toast.error('password did not match');
        }
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            toast.success('Signup successful');
        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <div className="p-6 bg-violet-600 w-1/4 mx-auto">
            <h2>Signup</h2>
            <form onSubmit={handleSignup}>
                <input className="block mt-3 p-2 w-full" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input className="block mt-3 p-2 w-full" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <input className="block mt-3 p-2 w-full" type="password" placeholder="Confirm Password" value={cPassword} onChange={(e) => setCPassword(e.target.value)} />
                <button type="submit" className="mt-4 py-2 px-5 flex mx-auto bg-red-600 rounded-lg">
                    Signup
                </button>
            </form>
        </div>
    );
};

export default Register;
