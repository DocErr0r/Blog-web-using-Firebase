import { createBrowserRouter, createRoutesFromElements, Navigate, Outlet, Route, RouterProvider } from 'react-router-dom';
import Root from './pages/Root/Root';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AllBlogs from './pages/AllBlogs/AllBlogs';
import Blog from './pages/Blog/Blog';
import AdminLogin from './pages/Admin/AdminLogin/AdminLogin';
import './App.css';
import Dashboard from './pages/Admin/Dashboard/Dashboard';
import Home from './pages/Home/Home';
import CreateBlog from './pages/Admin/createBlogs/CreateBlogs';

const AdminRoutes = () => {
    const admin = JSON.parse(localStorage.getItem('admin'));
    console.log(admin);
    if (admin?.user?.email === 'admin@gmail.com') {
        return <Outlet />;
    } else {
        return <Navigate to={'/admin-login'} replace />;
    }
};

function App() {
    const router = createBrowserRouter(
        createRoutesFromElements([
            <Route path="/" element={<Root />}>
                <Route index={true} element={<Home />} />
                <Route path="blog" element={<Blog />} />
                <Route path="all-blogs" element={<AllBlogs />} />
                <Route path="admin-login" element={<AdminLogin />} />
                <Route path="/" element={<AdminRoutes />}>
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="createblog" element={<CreateBlog />} />
                </Route>
            </Route>,
        ]),
    );

    return (
        <div className="">
            {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
            <RouterProvider router={router} />
            <ToastContainer position="top-right" autoClose={1000} hideProgressBar={false} newestOnTop pauseOnFocusLoss draggable pauseOnHover theme="dark" transition:Bounce />
        </div>
    );
}

export default App;
