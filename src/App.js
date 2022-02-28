import React from 'react';
import './App.css';
import {Route, Routes, useNavigate } from 'react-router-dom';
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shopPage';
import Header from './components/header/header';
import SignInAndSignUpPage from './pages/authPages/sign-in-and-sign-up';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';



class App extends React.Component {

  constructor(){
    super();

    this.state= {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth= auth.onAuthStateChanged(async userAuth => {
      // createUserProfileDocument(user);
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          }, () => {
            console.log(this.setState);
          })
        });
      }else{
        this.setState({currentUser: userAuth});
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
          <Header currentUser= {this.state.currentUser} />
          <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/shop' element={<ShopPage/>} />
            <Route path='/signin' element={<SignInAndSignUpPage/>} />
          </Routes>
      </div>
    );
  }
  
}

export default App;
