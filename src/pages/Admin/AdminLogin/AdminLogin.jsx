import React, { useContext, useState } from 'react';
import myContext from '../../../contexts/data/myContext';
import { FaEye } from 'react-icons/fa';
import { FaEyeSlash } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../firebase/firebaseConfig';
import { toast } from 'react-toastify';
import Loader from '../../../Components/Loader/Loader';

const AdminLogin = () => {
    const { mode } = useContext(myContext);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [showPassword, setShowPassword] = useState(false);

    const login = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            return toast.error('Fill all required fields');
        }
        setLoading(true);
        try {
            const result = await signInWithEmailAndPassword(auth, email, password);
            toast.success('Login Success');
            localStorage.setItem('admin', JSON.stringify(result));
            navigate('/dashboard');
        } catch (error) {
            toast.error('Login Failed');
            console.log(error);
        }
        setLoading(false);
    };

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className={`my-16 max-w-md w-full p-8 rounded-lg shadow-lg ${mode === 'dark' ? 'bg-black' : 'bg-white'}`}>
                <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
                <div className="mb-4 rounded-full p-2 text-white">
                    <div className=" flex justify-center">
                        {/* Image  */}
                        <img src="https://cdn-icons-png.flaticon.com/128/727/727399.png" className="h-20 w-20 border-2 border-blue-600 rounded-full" />
                    </div>
                </div>
                <form className="space-y-4" onSubmit={login}>
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium">
                            Email:
                        </label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 block text-black w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </div>
                    <div className="relative">
                        <label htmlFor="password" className="block text-sm font-medium">
                            Password:
                        </label>
                        <input type={`${showPassword ? 'text' : 'password'}`} value={password} onChange={(e) => setPassword(e.target.value)} className="mt-1 text-black  block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                        <div className="absolute right-3 top-9 text-black" onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </div>
                    </div>
                    <button type="submit" disabled={loading} className="w-full bg-indigo-500 text-white font-bold py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 disabled:bg-indigo-800">
                        Login
                    </button>
                    {loading && <Loader />}
                </form>
            </div>
        </div>
    );
};

export default AdminLogin;
