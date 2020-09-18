import React, { Component } from 'react';
import { connect } from 'react-redux';

import { NavLink, Link, withRouter } from 'react-router-dom'



class _MainNavBar extends Component {
    state = {
        navBar: ''
    }

    componentDidMount() {
        window.addEventListener('scroll', this.backgroundChanged);
        this.unlisten = this.props.history.listen((location, action) => {
            console.log(this.props);
        })
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(this.props);
    }
    

    componentWillUnmount() {
        window.removeEventListener('scroll', this.backgroundChanged);
        this.unlisten();

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
                    <NavLink to="/loginsignup" >Login</NavLink>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = {

}

export const MainNavBar = connect(mapStateToProps, mapDispatchToProps)(withRouter(_MainNavBar));