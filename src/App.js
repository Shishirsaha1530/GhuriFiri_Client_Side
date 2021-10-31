import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './Components/Pages/About/About';
import Header from './Components/Pages/Header/Header';
import Home from './Components/Pages/Home/Home';
import Testimonial from './Components/Pages/Testimonial/Testimonial';
import ContactUs from './Components/Pages/Contact/ContactUs';
import Footer from './Components/Pages/Footer/Footer';
import FAskQuestion from './Components/Pages/FrequentAskQ/FAskQuestion';
import TourPackages from './Components/Pages/Packages/AllPackages/TourPackages';
import ErrorPage from './Components/Pages/PageNotFound/ErrorPage';
import Login from './Components/Pages/Login/Login';
import AuthProvider from './Context/AuthProvider'
import PrivateRoute from './Components/Pages/Login/PrivateRoute/PrivateRoute';
import AddPackage from './Components/Pages/AddPackage/AddPackage';
import ManagePackage from './Components/Pages/ManagePackage/ManagePackage';
import PlaceOrder from './Components/Pages/PlaceOrder/PlaceOrder';
import MyOrders from './Components/Pages/MyOrder/MyOrders';
import ManageOrder from './Components/Pages/ManageOrders/ManageOrder';


function App() {
  const [loader, setLoader] = useState(false);

  useEffect(()=>{
    setLoader(true);
    setTimeout(()=>{
      setLoader(false)
    }, 3000)
  },[])

  return (
    <div>
    {
      loader? 
     <div className="d-flex justify-content-center align-items-center mt-5 pt-5">
        <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
      : 
      <AuthProvider> 
        <Header> </Header>
      <Switch> 
        <Route exact path='/'>
             <Home> </Home>
         </Route>
        <Route exact path='/home'>
             <Home> </Home>
         </Route>
        <Route exact path='/about'>
             <About> </About>
         </Route>
        <Route exact path='/package'>
             <TourPackages> </TourPackages>
         </Route>
        <Route exact path='/testimonial'>
             <Testimonial></Testimonial>
         </Route>
        <Route exact path='/frequent'>
             <FAskQuestion> </FAskQuestion>
         </Route>
        <PrivateRoute exact path='/contact'>
             <ContactUs></ContactUs>
         </PrivateRoute>
        <PrivateRoute exact path='/managepackage'>
             <ManagePackage> </ManagePackage>
         </PrivateRoute>
        <PrivateRoute exact path='/myorders'>
             <MyOrders> </MyOrders>
         </PrivateRoute>
        <PrivateRoute exact path='/manageorders'>
             <ManageOrder> </ManageOrder>
         </PrivateRoute>
        <PrivateRoute exact path='/booking/:id'>
          <PlaceOrder> </PlaceOrder>
         </PrivateRoute>
        <Route exact path='/login'>
             <Login> </Login>
         </Route>
        <PrivateRoute exact path='/addpackage'>
             <AddPackage> </AddPackage>
         </PrivateRoute>

        <Route path='/*'>
              <ErrorPage> </ErrorPage>
         </Route>   
      </Switch>
      <Footer> </Footer>
    </AuthProvider>

    }
    
    </div>
  );
}

export default App;
