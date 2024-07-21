import { createBrowserRouter, createRoutesFromElements, Navigate, Outlet, Route, RouterProvider } from 'react-router-dom';
import Root from './pages/Root/Root';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AllBlogs from './pages/AllBlogs/AllBlogs';
import Blog from './pages/Blog/Blog';
import AdminLogin from './pages/Admin/AdminLogin/AdminLogin';
import './App.css';
import Dashboard from './pages/Admin/Dashboard/Dashboard';
import Home from './pages/Home/Home';
import CreateBlog from './pages/Admin/createBlogs/CreateBlogs';
import Register from './pages/Auth/Register';
import Profile from './pages/Auth/Profile';
import BlogInfo from './pages/BlogInfo/BlogInfo';
import NotFoundPage from './pages/Nopage/NoPage';

const AdminRoutes = () => {
    const admin = JSON.parse(localStorage.getItem('admin'));
    console.log(admin);
    if (admin?.user?.email === 'admin@gmail.com') {
        return <Outlet />;
    } else {
        toast.warn('please login as an Admin');
        return <Navigate to={'/admin-login'} replace />;
    }
};

function App() {
    const router = createBrowserRouter(
        createRoutesFromElements([
            <Route path="/" element={<Root />}>
                <Route index={true} element={<Home />} />
                <Route path="blog" element={<Blog />} />
                <Route path="all-blogs" element={<AllBlogs />} />z
                <Route path="bloginfo/:id" element={<BlogInfo />} />z
                <Route path="admin-login" element={<AdminLogin />} />
                <Route path="register" element={<Register />} />
                <Route path="/" element={<AdminRoutes />}>
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="profile" element={<Profile />} />
                    <Route path="createblog" element={<CreateBlog />} />
                </Route>
                <Route path='*' element={<NotFoundPage />} />
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
