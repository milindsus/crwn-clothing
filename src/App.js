import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';

import {Switch, Route, Redirect} from 'react-router-dom';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.action';
import {selectCurrentUser} from './redux/user/user.selectors';

class App extends React.Component {

  unSubscribeFromAuth = null;

  componentDidMount () {
    const {setCurrentUser} = this.props;

    this.unSubscribeFromAuth = auth.onAuthStateChanged(async authUser => {
      if (authUser) {
        const userRef = createUserProfileDocument(authUser);

        (await userRef).onSnapshot(snapshot => {
            setCurrentUser ({
                id: snapshot.id,
                ...snapshot.data()
            });
        });

      }
      else {
          setCurrentUser(authUser);
        }
    })
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }
  render () {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact={true} path='/checkout' component={CheckoutPage} />          
          <Route exact={true} path='/signin' render={() => this.props.currentUser ? 
                            (<Redirect to='/' />) : 
                            (<SignInAndSignUpPage />)}
          />        
        </Switch>
  
      </div>
    );
  }

}

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state)
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
