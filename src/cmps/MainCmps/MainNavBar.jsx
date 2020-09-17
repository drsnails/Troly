import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink, Link } from 'react-router-dom'


class _MainNavBar extends Component {
    state = {

    }

    componentDidMount() {
    }

    render() {
        return (
            <div className="main-navbar flex Justify-between align-center full">
                <Link  to="/" > <h1 className="logo">Trolly</h1></Link>
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

export const MainNavBar = connect(mapStateToProps, mapDispatchToProps)(_MainNavBar);