import React, { Component } from 'react';
import { connect } from 'react-redux';

class _UserTrips extends Component {
    state = {

    }

    componentDidMount() {
        console.log('UserTrips', this.props);
    }

    render() {
        return (
            <div>

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

export const UserTrips = connect(mapStateToProps, mapDispatchToProps)(_UserTrips);