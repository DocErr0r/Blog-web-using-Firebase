import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Root from './pages/Root/Root';
import { ToastContainer } from 'react-toastify';
import AllBlogs from './pages/AllBlogs/AllBlogs';
import Blog from './pages/Blog/Blog';
import AdminLogin from './pages/Admin/AdminLogin/AdminLogin';
import './App.css';
import Dashboard from './pages/Admin/Dashboard/Dashboard';
import Home from './pages/Home/Home';
import CreateBlog from './pages/Admin/createBlogs/CreateBlogs';

function App() {
    const router = createBrowserRouter(
        createRoutesFromElements([
            <Route path="/" element={<Root />}>
                <Route index={true} element={<Home />} />
                <Route path="blog" element={<Blog />} />
                <Route path="all-blogs" element={<AllBlogs />} />
                <Route path="admin-login" element={<AdminLogin />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="createblog" element={<CreateBlog />} />
            </Route>,
        ]),
    );

    return (
        <div className="w-full">
            <ToastContainer />
            {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
