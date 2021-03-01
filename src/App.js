import React, { useState, useEffect } from 'react'
import './App.css';
import Navbar from './components/Navbar';
import fire from './components/firebase';
import Login from './components/Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Info from './pages/Form';
import Map from './pages/Map';
import UserProfile from './pages/UserProfile';

function App() {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState(false);

  const clearInput = () => {
    setEmail("");
    setPassword("");
  }

  const clearError = () => {
    setEmailError("");
    setPasswordError("");
  }

  const handleLogin = () => {
    clearError();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
          switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;  
          }
      });
  }

  const handleSignup = () => {
    clearError();
    fire
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .catch((err) => {
        switch (err.code) {
        case "auth/email-already-in-use":
        case "auth/invalid-email":
        
          setEmailError(err.message);
          break;
        case "auth/weak-password":
          setPasswordError(err.message);
          break;  
        }
    });
  }

  const handleLogout = () => {
    fire.auth().signOut();
  }

  const authListner = () => {
    fire.auth().onAuthStateChanged((user) => {
      if(user){
        clearInput();
        setUser(user);  
      }else {
        setUser("");
      }
    })
  };

  useEffect(() => {
    authListner();
  }, []);


  return (
    
    <div className="App">
      {user ? (
        <>
        <Router>
    
          <Navbar handleLogout={handleLogout}/> 
          <Switch>
            <Route exact  path='/' component={Dashboard}  />
            <Route exact  path='/userprofile' component={UserProfile} />
            <Route exact  path='/form' component={Info} />
            <Route exact path='/map' component={Map}/>
          </Switch>
        </Router>
        </>
      ) : (
        <Login 
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        setPasswordError={setPasswordError}
        handleLogin={handleLogin}
        handleSignup={handleSignup}
        hasAccount={hasAccount}
        setHasAccount={setHasAccount}
        emailError={emailError}
        passwordError={passwordError}
      />
      )}
    </div>
  );
}

export default App;
