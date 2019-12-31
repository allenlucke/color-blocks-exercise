import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = reduxState => ({
    reduxState,
})

class Colors extends Component {
    render() {
        return (
            <div>
                <h2>Color Settings</h2>
                <p>Placeholder text</p>
            </div>
        )
    }
}

export default connect(mapStateToProps)(Colors);