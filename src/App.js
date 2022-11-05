import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AuthProvider from './Hooks/Authentication/Auth/AuthProvider';
import About from './Pages/About/About';
import Register from './Pages/Authentication/Register/Register';
import SignIn from './Pages/Authentication/SignIn/SignIn';
import ContactMain from './Pages/Contact/ContactMain/ContactMain';
import AddProduct from './Pages/DashBoard/AddProduct/AddProduct';
import DashBoard from './Pages/DashBoard/DashBoard';
import MakeAdmin from './Pages/DashBoard/MakeAdmin/MakeAdmin';
import MyCart from './Pages/DashBoard/MyCart/MyCart';
import HomeMain from './Pages/Home/HomeMain/HomeMain';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import ShopMain from './Pages/Shop/ShopMain/ShopMain';
import MyOrder from './Pages/DashBoard/MyOrder/MyOrder';
import NotFound from './Pages/NotFound/NotFound';
import Purchase from './Pages/Purchase/Purchase';
import AddReview from './Pages/DashBoard/Add Review/AddReview';
import ManageProducts from './Pages/DashBoard/ManageProducts/ManageProducts';
import ManageAccessories from './Pages/DashBoard/ManageAccessories/ManageAccessories';
import ManageAllOrders from './Pages/DashBoard/ManageAllOrders/ManageAllOrders';
import AdminRoute from './Pages/AdminRoute/AdminRoute';


function App() {

  return (
    <div>
      <BrowserRouter>
        <AuthProvider>

          <Routes>
            <Route path='/' element={<HomeMain></HomeMain>}></Route>
            <Route path='/home' element={<HomeMain></HomeMain>}></Route>
            <Route path='/shop' element={<ShopMain></ShopMain>}></Route>
            <Route path='about' element={<About></About>}></Route>
            <Route path='contact' element={<ContactMain></ContactMain>}></Route>
            <Route path='/register' element={<Register></Register>}></Route>
            <Route path='/dashboard' element={<PrivateRoute><DashBoard></DashBoard></PrivateRoute>}>
              <Route index element={<MyCart></MyCart>}></Route>
              <Route path='mycart' element={<MyCart></MyCart>}></Route>
              <Route path='makeadmin' element={<AdminRoute><MakeAdmin></MakeAdmin></AdminRoute>}></Route>
              <Route path='addproducts' element={<AdminRoute><AddProduct></AddProduct></AdminRoute>}></Route>
              <Route path='myorders' element={<MyOrder></MyOrder>}></Route>
              <Route path='addreview' element={<AddReview></AddReview>}></Route>
              <Route path='manageproducts' element={<AdminRoute><ManageProducts></ManageProducts></AdminRoute>}></Route>
              <Route path='manageaccessories' element={<AdminRoute><ManageAccessories></ManageAccessories></AdminRoute>}></Route>
              <Route path='manageallorders' element={<AdminRoute><ManageAllOrders></ManageAllOrders></AdminRoute>}></Route>
            </Route>
            <Route exact path='*' element={<NotFound></NotFound>}></Route>
            <Route path='/signin' element={<SignIn></SignIn>}></Route>
            <Route path='purchase' element={<PrivateRoute><Purchase></Purchase></PrivateRoute>}></Route>
          </Routes>
        </AuthProvider>

      </BrowserRouter>

    </div>
  );
}

export default App;
