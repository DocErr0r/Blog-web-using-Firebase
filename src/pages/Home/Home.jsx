import React, { useContext } from 'react';
import Card from '../../Components/card/Card';
import HeroSection from '../../Components/HeroSection/HeroSection';
import myContext from '../../contexts/data/myContext';
import { Link, useNavigate } from 'react-router-dom';
import Loader from '../../Components/Loader/Loader';

export default function Home() {
    const { mode, getAllBlog, loading } = useContext(myContext);
    const navigate = useNavigate();

    if (loading) {
        return <Loader />;
    }

    return (
        <>
            <HeroSection />
            <div className="container mx-auto min-h-[100vh] flex flex-wrap">
                <section className="text-gray-600 body-font">
                    <div className="container px-5 py-10 mx-auto max-w-7xl">
                        <div className="flex flex-wrap justify-center -m-4 mb-5">{getAllBlog.length > 0 ? getAllBlog.map((blog, index) => <Card key={index} navigate={navigate} blog={blog} />) : <h1 className="text-xl font-bold">No blogs found</h1>}</div>
                        <div className="flex justify-center my-5">
                            <Link to={'/all-blogs'}>
                                <button
                                    style={{
                                        background: mode === 'dark' ? 'rgb(226, 232, 240)' : 'rgb(30, 41, 59)',
                                        color: mode === 'dark' ? 'rgb(30, 41, 59)' : 'rgb(226, 232, 240)',
                                    }}>
                                    See more
                                </button>
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
