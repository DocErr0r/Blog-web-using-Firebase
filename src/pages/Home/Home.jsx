import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
// import Layout from '../../Components/Layout/Layout';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import HeroSection from '../../Components/HeroSection/HeroSection';
import myContext from '../../contexts/data/myContext';

export default function Home() {
    const {mode}=useContext(myContext)
    return (
        <>
            <main className={`bg-gradient-to-tl ${mode==='dark'?' from-blue-700 to-gray-900':'from-slate-200 to-gray-400'}`}>
                {/* <Layout>
                <h1>Home</h1>
                <Outlet />
            </Layout> */}
                <Navbar />
                <HeroSection />
                <div className="container mx-auto min-h-[100vh] ">
                    <Outlet />
                </div>
            </main>
            <Footer />
        </>
    );
}
