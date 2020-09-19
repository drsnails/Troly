import React from 'react'
import { Formik } from 'formik';


export class Login extends React.Component {
    state = {
        msg: ''

    }
    onSubmit = async (ev) => {
        ev.preventDefault()
        const { email, password } = ev.target
        const userCreds = { email: email.value, password: password.value }
        const user = await this.props.handleForm(userCreds)
        if (!user) this.setState({ msg: 'wrong username or password' })
        else{
            this.props.closeModal()
        }



    }


    render() {
        return (
            <form onSubmit={this.onSubmit} >
                <input className="special-input" type="email" placeholder="email" name="email"></input>
                <input className="special-input" type="password" placeholder="password" name="password"></input>
                <button>Login</button>
                <p>not a user? please <span onClick={()=>this.props.handleClick('signup')}>sign up</span></p>
                {this.state.msg && <p>{this.state.msg}</p>}
            </form>
        )
    }
}