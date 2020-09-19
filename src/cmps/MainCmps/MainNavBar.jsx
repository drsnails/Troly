import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink, Link, withRouter } from 'react-router-dom'

import { showModal } from '../../store/actions/modalActions'
import { logout } from '../../store/actions/userActions'



class _MainNavBar extends Component {
    state = {
        navBar: '',
        loggedInUser:''
    }

    componentDidMount() {
        this.setState({loggedInUser:this.props.usersData.loggedInUser})
        window.addEventListener('scroll', this.backgroundChanged);
   
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.state.loggedInUser===this.props.usersData.loggedinUser) return
        this.setState({loggedInUser:this.props.usersData.loggedinUser})
    }
    

    componentWillUnmount() {
        window.removeEventListener('scroll', this.backgroundChanged);

    }


    backgroundChanged = () => {
        if (window.pageYOffset >= 80 || this.props.location.pathname !== '/') {
            this.setState({ navBar: true })
        } else { this.setState({ navBar: false }) }
    }




    render() {
        return (
            <div className={'main-navbar flex Justify-between align-center full  ' + (this.state.navBar ? 'navBar-background' : '')}>
                <Link to="/" > <h1 className="logo">Trolly</h1></Link>
                <div className="flex Justify-between main-navbar-links">
                    <NavLink to="/about" >About</NavLink>
                    <NavLink to="/user/:id" >User</NavLink>
                    {/* <NavLink to="/loginsignup" >Login</NavLink> */}
                   {this.state.loggedInUser?<div onClick={()=>this.props.logout()}>Logout</div>:<div onClick={()=>this.props.showModal('login')}>Login</div>} 
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        usersData: state.userReducer

    }
}

const mapDispatchToProps = {
    showModal,
    logout
}

export const MainNavBar = connect(mapStateToProps, mapDispatchToProps)(withRouter(_MainNavBar));