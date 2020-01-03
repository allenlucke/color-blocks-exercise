import React, { Component } from 'react';
import { connect } from 'react-redux';
//Style
import './swatches.css'
const mapStateToProps = reduxState => ({
    reduxState,
})

class Swatches extends Component {
    componentDidMount() {
        this.props.dispatch({
            type: 'GET_BLOCKS'
        })
        this.props.dispatch({
            type: 'GET_COLORS'
        })
    }
    
    deleteBlock = (event, id) => {
        this.props.dispatch({
            type: 'DELETE_BLOCK',
            payload: id
        })
        this.props.dispatch({
            type: 'GET_BLOCKS',
        })
    }

    render() {
        const colorBlocks = this.props.reduxState.getBlocksReducer.map((item, index) => {
            const el = `#${item.hex_code}`
            const block = <div style= {{backgroundColor: el }} className="box"></div>;
            return(
                <div key={index} className="swatchesBody">
                    {block}
                    <h4 className="label">{item.label}</h4>
                    <div className="label">
                        <button onClick={(event) =>this.deleteBlock(event, item.id)}>DELETE</button>
                    </div>
                </div>
            )
        })
        const colorButtons = this.props.reduxState.getColorsReducer.map((item, index) => {
            const el = `#${item.hex_code}`
            console.log(el)
            return(
                <div key={index} className="swatchesBody">
                    <button 
                    className="colorButton"
                    style= {{backgroundColor: el }}
                    >Add a {item.label} Box</button>
                </div>
            )
        })
        return (
            <div >
                {colorButtons}
                <h2>Color Swatches</h2>
                {colorBlocks}
            </div>
        )
    }
}

export default connect(mapStateToProps)(Swatches);