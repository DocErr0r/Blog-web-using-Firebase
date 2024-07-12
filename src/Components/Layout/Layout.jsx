import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

export default function Layout({children}) {
    return (
        <div>
            <Navbar />
            <div className="container min-h-screen">
                {children}
            </div>
            <Footer />
        </div>
    );
}
