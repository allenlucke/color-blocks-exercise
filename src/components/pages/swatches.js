import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = reduxState => ({
    reduxState,
})

class Swatches extends Component {
    componentDidMount() {
        this.props.dispatch({
            type: 'GET_BLOCKS'
        })
    }
    render() {
        const colorBlocks = this.props.reduxState.getBlocksReducer.map((item, index) => {
            return(
                <div key={index}>
                    <h4>{item.id}</h4>
                    <h4>{item.label}</h4>
                    <h4>{item.hex_code}</h4>
                </div>
            )
        })
        return (
            <div>
                <h2>Color Swatches</h2>
                <p>Placeholder text</p>
                {colorBlocks}
            </div>
        )
    }
}

export default connect(mapStateToProps)(Swatches);