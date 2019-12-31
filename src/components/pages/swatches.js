import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = reduxState => ({
    reduxState,
})

class Swatches extends Component {
    render() {
        return (
            <div>
                <h2>Color Swatches</h2>
                <p>Placeholder text</p>
            </div>
        )
    }
}

export default connect(mapStateToProps)(Swatches);