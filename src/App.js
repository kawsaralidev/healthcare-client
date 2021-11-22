import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbars from './components/Navbars/Navbars';
import Home from './components/Home/Home';
import Allservices from './components/Services/Allservices';
import Booking from './components/Booking/Booking';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Footer/Footer';
import Doctors from './components/Doctors/Doctors';
import Login from './components/Login/Login';
import AuthProvider from './components/AuthProvider/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AboutUs from './components/About Us/AboutUs';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navbars></Navbars>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/allservices">
              <Allservices></Allservices>
            </Route>
            <PrivateRoute path="/booking">
              <Booking></Booking>
            </PrivateRoute>
            <Route path="/doctors">
              <Doctors></Doctors>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/aboutus">
              <AboutUs></AboutUs>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
