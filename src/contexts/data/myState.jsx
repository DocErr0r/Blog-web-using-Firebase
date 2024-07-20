import React, { useState, useEffect } from 'react';
import myContext from './myContext';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { FireDb } from '../../firebase/firebaseConfig';

function MyState({ children }) {
    const [mode, setMode] = useState(localStorage.getItem('theme') || 'light');
    // const [searchkey, setSearchkey] = useState('');
    const [loading, setloading] = useState(false);

    const [getAllBlog, setGetAllBlog] = useState([]);

    // toggle theame
    const toggleTheme = () => {
        if (mode === 'light') {
            setMode('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            setMode('light');
            localStorage.setItem('theme', 'light');
        }
    };

    function getAllBlogs() {
        setloading(true);
        try {
            const q = query(collection(FireDb, 'blogPost'), orderBy('time'));
            const data = onSnapshot(q, (QuerySnapshot) => {
                let blogArray = [];
                QuerySnapshot.forEach((doc) => {
                    blogArray.push({ ...doc.data(), id: doc.id });
                });

                setGetAllBlog(blogArray);
                // console.log(productsArray)
                setloading(false);
            });
            return () => data;
        } catch (error) {
            console.log(error);
            setloading(false);
        }
    }

    const deleteBlogs = async (id) => {
        try {
            await deleteDoc(doc(fireDb, 'blogPost', id));
            getAllBlogs();
            toast.success('Blogs deleted successfully');
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getAllBlogs();
    }, []);

    return <myContext.Provider value={{ mode, toggleTheme, loading, setloading, getAllBlog, deleteBlogs }}>{children}</myContext.Provider>;
}

export default MyState;
