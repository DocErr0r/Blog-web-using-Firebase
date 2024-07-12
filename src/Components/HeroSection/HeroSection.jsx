import React, { useContext } from 'react';
import myContext from '../../contexts/data/myContext';
import { Link } from 'react-router-dom';

function HeroSection() {
    const context = useContext(myContext);
    const { mode } = context;
    return (
        <section style={{ background: mode === 'dark' ? 'rgb(30, 41, 59)' : '#30336b' }}>
            {/* Hero Section  */}
            <div className="container mx-auto flex px-5 py-14 items-center justify-center flex-col">
                {/* Main Content  */}
                <main>
                    <div className="text-center">
                        <div className="mb-2">
                            {/* Image  */}
                            <div className="flex justify-center">
                                <img src="https://cdn-icons-png.flaticon.com/128/3685/3685253.png" alt="" />
                            </div>

                            {/* Text  */}
                            <h1 className=" text-3xl text-white font-bold">BlogNits</h1>
                        </div>

                        {/* Paragraph  */}
                        <p style={{ color: mode === 'dark' ? 'white' : 'white' }} className="sm:text-3xl text-xl font-extralight sm:mx-auto ">
                            Here are some blogs and tutorials contributed by BlogNits.
                        </p>
                    </div>
                    <div className="flex justify-center mt-10">
                        <Link className="px-6 bg-gradient-to-r hover:scale-110 from-pink-600 to-blue-800 py-2 border rounded-md text-white ">Get Start</Link>
                    </div>
                </main>
            </div>
        </section>
    );
}

export default HeroSection;
