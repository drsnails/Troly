import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink, Link, withRouter } from 'react-router-dom'

import { UserPreview } from '../MainCmps/UserPreview'

import { showModal } from '../../store/actions/modalActions'
import { logout } from '../../store/actions/userActions'

class _MainNavBar extends Component {
    state = {
        navBar: '',
        loggedInUser: ''
    }

    componentDidMount() {
        this.setState({ loggedInUser: this.props.usersData.loggedInUser })
        window.addEventListener('scroll', this.backgroundChanged);

    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.location.pathname !== prevProps.location.pathname) this.backgroundChanged()
        if (this.state.loggedInUser === this.props.usersData.loggedinUser) return
        this.setState({ loggedInUser: this.props.usersData.loggedinUser })
    }


    componentWillUnmount() {
        window.removeEventListener('scroll', this.backgroundChanged);

    }


    backgroundChanged = () => {
        const path = this.props.location.pathname.match('/')
        const match = path && this.props.location.pathname === path[0]
        if (window.pageYOffset >= 80 || !match) {
            this.setState({ navBar: true })
        } else { this.setState({ navBar: false }) }
    }

    render() {
        return (
            <div className={'main-navbar flex Justify-between align-center full  ' + (this.state.navBar ? 'navBar-background' : '')}>
                <Link to="/" > <h1 className="logo">Trolly</h1></Link>
                <div className="flex Justify-between main-navbar-links">
                    <Link to="/trip">All Trips</Link>
                    <NavLink to="/about" >About</NavLink>
                    {this.state.loggedInUser ? <UserPreview logout={this.props.logout} user={this.state.loggedInUser} /> : <div onClick={() => this.props.showModal('login')}>Login</div>}
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