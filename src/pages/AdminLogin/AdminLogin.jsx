import React, { useContext } from 'react';
import myContext from '../../contexts/data/myContext';

export const AdminLogin = () => {
    const { mode} = useContext(myContext);

    return (
        <div className={`min-h-screen flex items-center justify-center bg-${mode}-500`}>
            <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
                <div className="mb-4 rounded-full border border-white/10 bg-white/10 p-2 text-white">
                    <div className=" flex justify-center">
                        {/* Image  */}
                        <img src="https://cdn-icons-png.flaticon.com/128/727/727399.png" className="h-20 w-20" />
                    </div>
                </div>
                <form className="space-y-4">
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                            Username:
                        </label>
                        <input type="text" id="username" name="username" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password:
                        </label>
                        <input type="password" id="password" name="password" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </div>
                    <button type="submit" className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50">
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};
