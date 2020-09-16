import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

class _HomePage extends Component {
    state = {

    }

    componentDidMount() {
        
    }

    render() {
        return (
            <div>
                <Link to="/trip/438577i4h48fu049f/triproute">
                    <button>Eplore</button>
                </Link>
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

export const HomePage = connect(mapStateToProps, mapDispatchToProps)(_HomePage);