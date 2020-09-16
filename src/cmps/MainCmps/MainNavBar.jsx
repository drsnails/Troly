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
            <div className="flex justify-between container">
                <Link  to="/" > <h2 className="logo">Trolly</h2></Link>
                <div>
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