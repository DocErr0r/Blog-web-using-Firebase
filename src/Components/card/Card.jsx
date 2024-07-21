import React, { useContext } from 'react';
import myContext from '../../contexts/data/myContext';
import { useNavigate } from 'react-router-dom';

function BlogPostCard({ blog }) {
    const context = useContext(myContext);
    const { mode } = context;
    const navigate=useNavigate()

    const { thumbnail, id, date } = blog;

    return (
        <div className="p-4 md:w-1/3">
            <div
                style={{
                    background: mode === 'dark' ? 'rgb(30, 41, 59)' : 'white',
                    borderBottom: mode === 'dark' ? ' 4px solid rgb(226, 232, 240)' : ' 4px solid rgb(30, 41, 59)',
                }}
                className={`h-full shadow-lg  hover:-translate-y-1 cursor-pointer hover:shadow-gray-400
                                                ${mode === 'dark' ? 'shadow-gray-700' : 'shadow-xl'} 
                                                rounded-xl overflow-hidden`}>
                <img onClick={() => navigate(`/bloginfo/${id}`)} className="w-full" src={thumbnail} alt="blog" />
                <div className="p-6">
                    <h2
                        className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"
                        style={{
                            color: mode === 'dark' ? 'rgb(226, 232, 240)' : ' rgb(30, 41, 59)',
                        }}>
                        {date}
                    </h2>
                    <h1
                        className="title-font text-lg font-bold text-gray-900 mb-3"
                        style={{
                            color: mode === 'dark' ? 'rgb(226, 232, 240)' : ' rgb(30, 41, 59)',
                        }}>
                        {blog.blogs.title}
                    </h1>
                    <p
                        className="leading-relaxed mb-3"
                        style={{
                            color: mode === 'dark' ? 'rgb(226, 232, 240)' : ' rgb(30, 41, 59)',
                        }}>
                        {blog.blogs.summary}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default BlogPostCard;
