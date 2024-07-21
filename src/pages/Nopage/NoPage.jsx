import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import myContext from '../../contexts/data/myContext';

const NotFoundPage = () => {
    const { mode } = useContext(myContext);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className={`max-w-xl md:mx-auto p-8 ${mode === 'dark' ? 'bg-gray-800 ' : 'bg-white'}  shadow-lg rounded-lg text-center`}>
                <div className="flex items-center justify-center mb-4">
                    <img src="https://img.freepik.com/free-vector/404-error-with-landscape-concept-illustration_114360-7898.jpg" alt="No Page Found" className="w-1/3" />
                </div>
                <h2 className="text-3xl font-semibold mb-4 text-center">Oops! Page not found.</h2>
                <p className="text-lg text-center mb-8">The page you are looking for might have been removed or does not exist.</p>
                <div className="flex justify-center">
                    <Link to="/" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        Go to Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;
