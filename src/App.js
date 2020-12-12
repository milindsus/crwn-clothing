import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {Switch, Route} from 'react-router-dom';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';

class App extends React.Component {
  constructor () {
    super();

    this.state = {
      currentUser: null
    }
  }

  unSubscribeFromAuth = null;

  componentDidMount () {
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async authUser => {
      if (authUser) {
        const userRef = createUserProfileDocument(authUser);

        (await userRef).onSnapshot(snapshot => {
            this.setState({
              currentUser: {
                id: snapshot.id,
                ...snapshot.data()}
            });
        });
      }
      else {
        this.setState({
          currentUser: authUser
        });
      }
    })
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }
  render () {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact={true} path='/shop' component={ShopPage} />
          <Route exact={true} path='/signin' component={SignInAndSignUpPage} />        
        </Switch>
  
      </div>
    );
  }

}

export default App;
