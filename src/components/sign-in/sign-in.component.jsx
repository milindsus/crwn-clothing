import React from 'react';
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {signInWithGoogle} from '../../firebase/firebase.utils';
import './sign-in.styles.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit (event) {
        event.preventDefault();
        this.setState({email: '', password: ''});
    }

    handleChange(event) {
       const {name, value} = event.target;
       this.setState({ [name]: value });
    }

    render () {
        return (
            <div className="sign-in">
               <h2>I already have an account</h2> 
               <span>Sign in with your email and password</span>

               <form onSubmit={(event) => this.handleSubmit(event)}>
                    <FormInput name="email" 
                           label="Email"
                           type="email" 
                           onChange={(event) => this.handleChange(event)}
                           value={this.state.email}  required />
                    <FormInput name="password" 
                           label="Password"
                           type="password" 
                           onChange={(event) => this.handleChange(event)} 
                           value={this.state.password} required />

                    <div className="buttons">
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton isGoogleSignIn={true} onClick={signInWithGoogle}>Google Sign In</CustomButton>
                    </div>
                    
               </form>
            </div>

        );
    }
}

export default SignIn;