import React from "react";

class Register extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            name: ''
        }
    }
    onEmailChange = (event) =>{
        this.setState({email: event.target.value})
    }
    onNameChange = (event) =>{
        this.setState({name: event.target.value})
    }
    onPasswordChange = (event) =>{
        this.setState({password: event.target.value})
    }

    onSubmitChange = (event) =>{
        fetch('https://ancient-fjord-01096.herokuapp.com/register', {
            method: 'post', 
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
                name: this.state.name
            })
            })
            .then(response => response.json())
            .then(data => {
                if (data.id){
                    this.props.loadUser(data)
                    this.props.homeScreen('home');
                }
    })    
    }

    render() {
        const {homeScreen} = this.props;
        return (
            <div>
                <article className="white  mv4 w-100 w-50-m w-25-l mw5 center shadow-5 cssSignin ">
                    <main className="pa4 black-80">
                    <div className="measure ">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f2 white fw6 ph0 mh0">Register</legend>
                        <div className="mt3">
                            <label className="db white fw6 lh-copy f6" htmlFor="email-address">Name</label>
                            <input onChange={this.onNameChange} className="pa2 input-reset cssBorder bg-transparent  hover-white w-100" type="name" name="email-address"  id="email-address" />
                        </div>
                        <div className="mt3">
                            <label className="db white fw6 lh-copy f6" htmlFor="email-address">Email</label>
                            <input onChange={this.onEmailChange} className="pa2 input-reset cssBorder bg-transparent  hover-white w-100" type="email" name="email-address"  id="email-address" />
                        </div>
                        <div className="mv3">
                            <label className="db white fw6 lh-copy f6" htmlFor="password">Password</label>
                            <input onChange={this.onPasswordChange} className="b pa2 input-reset cssBorder bg-transparent  hover-white w-100" type="password" name="password"  id="password" />
                        </div>
                        </fieldset>
                        <div className="">
                        <input className="b ph3 pv2 white input-reset ba b--white bg-transparent grow pointer f6 dib" type="submit" value="Register"  onClick={this.onSubmitChange} />
                        </div>
                        <div className="lh-copy mt3">
                        </div>
                    </div>
                    </main>
                </article>
            </div>
        )
    }
}

export default Register;