import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Home from './pages/Home/Home';
import { ToastContainer } from 'react-toastify';
import Dashboard from './pages/Dashboard/Dashboard';
import AllBlogs from './pages/AllBlogs/AllBlogs';
import Blog from './pages/Blog/Blog';
// import './App.css';

function App() {
    const router = createBrowserRouter(
        createRoutesFromElements([
            <Route path="/" element={<Home />}>
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="blog" element={<Blog />} />
                <Route path="all-blog" element={<AllBlogs />} />
            </Route>,
        ]),
    );

    return (
        <div className="">
            <ToastContainer />
            {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
