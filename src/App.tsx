import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminEditProduct from './pages/AdminEditProduct';
import LoginPage from './pages/LoginPage';
import AdminLayout from './components/elements/AdminLayout';
import AdminProductList from './pages/AdminProductList';
import AdminCreateProduct from './pages/AdminCreateProduct';
import { configureAxios } from './config/axios';
import 'react-toastify/dist/ReactToastify.css';

configureAxios();

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AdminLayout />}>
                    <Route
                        path="/admin/products"
                        element={<AdminProductList />}
                    />
                    <Route
                        path="/admin/products/create"
                        element={<AdminCreateProduct />}
                    />
                    <Route
                        path="/admin/products/edit/:productId"
                        element={<AdminEditProduct />}
                    />
                </Route>

                <Route path="/login" element={<LoginPage />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
