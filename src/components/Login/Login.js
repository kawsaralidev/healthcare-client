import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import useFirebase from '../../Hooks/useFirebase';


const Login = () => {
    const { user, handleEmail, handlePassword, handleLogin, handleRegister } = useAuth();
    const { googleSignIn } = useAuth()
    const location = useLocation();
    const history = useHistory();

    const redirect_uri = location.state?.from || '/home';
    const handleGoogleLogin = () => {
        googleSignIn()
            .then(result => {
                history.push(redirect_uri)
            })
    }

    return (
        <div>
            <div className="col-sm-12 container mt-3 w-25 p-4 rounded login-form border border-info">
                <div >

                    <form >
                        {user.email ? <h2 className="text-info">Please Login</h2>
                            : <h2 className="text-info">Please Resgister</h2>}
                        {
                            user.email ? "" : <><label htmlFor="exampleInputEmail1" class="form-label">User Name</label>
                                <input className="w-100 " type="email" name="" id="" placeholder="text" required />  </>}
                        <label htmlFor="exampleInputEmail1" class="form-label">Email address</label>
                        <input onBlur={handleEmail} className="w-100 " type="email" name="" id="" placeholder="email" required />
                        <br />
                        <label htmlFor="exampleInputPassword1" class="form-label" >Password</label>
                        <input onBlur={handlePassword} className="w-100 mb-2" type="password" name="" id="" placeholder="password" required />
                        <br />
                        {user.email ? <button onClick={handleLogin} className="bg-info rounded text-white p-1 w-50 fw-bold">Login</button>
                            : <button onClick={handleRegister} className="bg-info rounded text-white p-1 w-50 fw-bold">Register</button>}

                    </form>
                    <p>Disin Care Hospital</p>
                    <div>
                        ----------or-----------
                    </div>
                    <button onClick={handleGoogleLogin} className="bg-info rounded text-white p-1 w-75 fw-bold" >Google sign in</button>
                </div>
            </div>
        </div>
    );
};

export default Login;



//email-----------------------------------------------------
/*
const handleUserRegister = (email, password) => {
    setLoding(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        const errorMessage = error.message;
      });
  };

  //-----------------------------------------------

  const handleUserLogin = (email, password) => {
    setLoding(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        const errorMessage = error.message;
      });
  }; */

  //sign up  with google--------------------------------------