import React, { useState, useContext } from 'react';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import myContext from '../../../contexts/data/myContext';
import { Link, useNavigate } from 'react-router-dom';
import { FireDb, storage } from '../../../firebase/firebaseConfig';
import { addDoc, collection, Timestamp } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { toast } from 'react-toastify';
import { Editor } from '@tinymce/tinymce-react';
function CreateBlog() {
    const context = useContext(myContext);
    const { mode } = context;
    const navigate = useNavigate();

    const [thumbnail, setthumbnail] = useState();
    const [text, settext] = useState('');
    const [blogs, setBlogs] = useState({
        title: '',
        category: '',
        content: '',
        author: 'Anonymous',
        time: Timestamp.now(),
    });

    // console.log('Value: ');
    console.log('text: ', text);

    const addPost = async () => {
        if (blogs.title === '' || blogs.category === '' || blogs.content === '' || blogs.thumbnail === '') {
            toast.error('Please Fill All Fields');
        }
        // console.log(blogs.content)
        uploadImage();
    };

    // how to upload image into firebase
    const uploadImage = () => {
        if (!thumbnail) return;
        const imageRef = ref(storage, `blogimage/${thumbnail.name}`);
        uploadBytes(imageRef, thumbnail).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                const productRef = collection(FireDb, 'blogPost');
                try {
                    addDoc(productRef, {
                        blogs,
                        thumbnail: url,
                        time: Timestamp.now(),
                        date: new Date().toLocaleString('en-US', {
                            month: 'short',
                            day: '2-digit',
                            year: 'numeric',
                        }),
                    });
                    navigate('/dashboard');
                    toast.success('Post Added Successfully');
                } catch (error) {
                    toast.error(error);
                    console.log(error);
                }
            });
        });
    };

    // Create markup function
    function createMarkup(c) {
        return { __html: c };
    }
    return (
        <div className="container mx-auto max-w-5xl py-6">
            <div
                className="p-5"
                style={{
                    background: mode === 'dark' ? '#353b48' : 'rgb(226, 232, 240)',
                }}>
                {/* Top Item  */}
                <div className="mb-2 flex justify-between">
                    <div className="flex gap-2 items-center">
                        {/* Dashboard Link  */}
                        <Link to={'/dashboard'}>
                            <BsFillArrowLeftCircleFill size={25} />
                        </Link>

                        {/* Text  */}
                        <h2 variant="h4">Create blog</h2>
                    </div>
                </div>

                {/* main Content  */}
                <div className="mb-3">
                    {/* Thumbnail  */}
                    {thumbnail && <img className=" w-full rounded-md mb-3 " src={thumbnail ? URL.createObjectURL(thumbnail) : ''} alt="thumbnail" />}

                    {/* Text  */}
                    <h2 variant="small" color="blue-gray" className="mb-2 font-semibold">
                        Upload Thumbnail
                    </h2>

                    {/* First Thumbnail Input  */}
                    <input
                        type="file"
                        label="Upload thumbnail"
                        className="shadow-[inset_0_0_4px_rgba(0,0,0,0.6)] text-black w-full rounded-md p-1"
                        style={{
                            background: mode === 'dark' ? '#dcdde1' : 'rgb(226, 232, 240)',
                        }}
                        onChange={(e) => setthumbnail(e.target.files[0])}
                    />
                </div>

                {/* Second Title Input */}
                <div className="mb-3">
                    <input
                        label="Enter your Title"
                        className={`shadow-[inset_0_0_4px_rgba(0,0,0,0.6)] w-full rounded-md p-1.5 
                 outline-none text-black ${mode === 'dark' ? 'placeholder-black' : 'placeholder-black'}`}
                        placeholder="Enter Your Title"
                        style={{
                            background: mode === 'dark' ? '#dcdde1' : 'rgb(226, 232, 240)',
                        }}
                        name="title"
                        onChange={(e) => setBlogs({ ...blogs, title: e.target.value })}
                        value={blogs.title}
                    />
                </div>

                {/* Third Category Input  */}
                <div className="mb-3">
                    <input
                        label="Enter your Category"
                        className={`shadow-[inset_0_0_4px_rgba(0,0,0,0.6)] w-full rounded-md p-1.5 
                 outline-none text-black  ${mode === 'dark' ? 'placeholder-black' : 'placeholder-black'}`}
                        placeholder="Enter Your Category"
                        style={{
                            background: mode === 'dark' ? '#dcdde1' : 'rgb(226, 232, 240)',
                        }}
                        name="category"
                        onChange={(e) => setBlogs({ ...blogs, category: e.target.value })}
                        value={blogs.category}
                    />
                </div>

                {/* Four Editor  */}
                {/* editor code  */}
                {console.log(import.meta.env)}
                <Editor
                    apiKey="dpwldsygifwasjcuinnhlho23keym7tbu8lfo73h381fwjug"
                    onEditorChange={(newValue, editor) => {
                        setBlogs({ ...blogs, content: newValue });
                        settext(editor.getContent({ format: 'text' }));
                    }}
                    onInit={(evt, editor) => {
                        settext(editor.getContent({ format: 'text' }));
                    }}
                    init={{
                        plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate mentions tableofcontents footnotes mergetags autocorrect typography inlinecss markdown',
                        toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
                    }}
                />

                {/* Five Submit Button  */}
                <button
                    className=" w-full mt-5"
                    onClick={addPost}
                    style={{
                        background: mode === 'dark' ? 'rgb(226, 232, 240)' : 'rgb(30, 41, 59)',
                        color: mode === 'dark' ? 'rgb(30, 41, 59)' : 'rgb(226, 232, 240)',
                    }}>
                    Send
                </button>

                {/* Six Preview Section  */}
                <div className="">
                    <h1 className=" text-center mb-3 text-2xl">Preview</h1>
                    <div className="content">
                        <div
                            className={`[&> h1]:text-[32px] [&>h1]:font-bold  [&>h1]:mb-2.5
                        ${mode === 'dark' ? '[&>h1]:text-[#ff4d4d]' : '[&>h1]:text-black'}

                        [&>h2]:text-[24px] [&>h2]:font-bold [&>h2]:mb-2.5
                        ${mode === 'dark' ? '[&>h2]:text-white' : '[&>h2]:text-black'}

                        [&>h3]:text-[18.72] [&>h3]:font-bold [&>h3]:mb-2.5
                        ${mode === 'dark' ? '[&>h3]:text-white' : '[&>h3]:text-black'}

                        [&>h4]:text-[16px] [&>h4]:font-bold [&>h4]:mb-2.5
                        ${mode === 'dark' ? '[&>h4]:text-white' : '[&>h4]:text-black'}

                        [&>h5]:text-[13.28px] [&>h5]:font-bold [&>h5]:mb-2.5
                        ${mode === 'dark' ? '[&>h5]:text-white' : '[&>h5]:text-black'}

                        [&>h6]:text-[10px] [&>h6]:font-bold [&>h6]:mb-2.5
                        ${mode === 'dark' ? '[&>h6]:text-white' : '[&>h6]:text-black'}

                        [&>p]:text-[16px] [&>p]:mb-1.5
                        ${mode === 'dark' ? '[&>p]:text-[#7efff5]' : '[&>p]:text-black'}

                        [&>ul]:list-disc [&>ul]:mb-2
                        ${mode === 'dark' ? '[&>ul]:text-white' : '[&>ul]:text-black'}

                        [&>ol]:list-decimal [&>li]:mb-10
                        ${mode === 'dark' ? '[&>ol]:text-white' : '[&>ol]:text-black'}

                        [&>li]:list-decimal [&>ol]:mb-2
                        ${mode === 'dark' ? '[&>ol]:text-white' : '[&>ol]:text-black'}

                        [&>img]:rounded-lg
                        `}
                            dangerouslySetInnerHTML={createMarkup(blogs.content)}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateBlog;
