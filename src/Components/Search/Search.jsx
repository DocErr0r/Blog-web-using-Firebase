import { Fragment, useContext, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { useNavigate } from 'react-router';
import myContext from '../../contexts/data/myContext';

export default function SearchDialog() {
    const [open, setOpen] = useState(false);
    const [searchkey, setSearchkey] = useState('');

    const handleOpen = () => setOpen(!open);
    const context = useContext(myContext);
    const { mode, getAllBlog } = context;
    const navigate = useNavigate();

    return (
        <Fragment>
            {/* Search Icon */}
            <div onClick={handleOpen}>
                <AiOutlineSearch size={20} color="white" />
            </div>

            {/* Dialog */}
            {open && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 ">
                    <div className="bg-white w-3/4 md:w-1/2 lg:w-1/3 mx-auto mt-20 p-4 rounded-lg shadow-lg">
                        <div className='flex text-black justify-end m-1'>
                            <button className='bg-gray-300 py-1 px-2 rounded-lg' onClick={handleOpen}>X</button>
                        </div>
                        {/* Input */}
                        <input type="search" value={searchkey} onChange={(e) => setSearchkey(e.target.value)} className="w-full py-2 px-4 border border-gray-300 rounded-lg mb-4" placeholder="Type here..." />

                        {/* Blog Cards */}
                        <div className="flex flex-wrap justify-center max-h-96 overflow-y-scroll">
                            {getAllBlog
                                .filter((obj) => obj.blogs.title.toLowerCase().includes(searchkey))
                                .map((item, index) => (
                                    <div key={index} className="p-2 w-full sm:w-1/2 md:w-2/5 lg:w-1/3">
                                        <div onClick={() => navigate(`/bloginfo/${item.id}`)} className="cursor-pointer bg-gray-200 rounded-lg p-2 mb-4">
                                            {/* Blog Thumbnail */}
                                            <img className="w-full mb-2 rounded-lg" src={item.thumbnail} alt="Blog Thumbnail" />

                                            {/* Blog Date */}
                                            <p className="text-sm">{item.date}</p>

                                            {/* Blog Title */}
                                            <h1>{item.blogs.title}</h1>
                                        </div>
                                    </div>
                                ))}
                        </div>

                        {/* Powered By */}
                        <div className="text-center mt-4">
                            <h1 className="text-gray-600">Powered By BlogNits</h1>
                        </div>
                    </div>
                </div>
            )}
        </Fragment>
    );
}
