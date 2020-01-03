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
        let el;
        const colorBlocks = this.props.reduxState.getBlocksReducer.map((item, index) => {
            if (item.hex_code === 'ff0000') {
                el =<div className="box red" ></div>;
            } else if(item.hex_code === '00ff00') {
                el =<div className="box green" ></div>;
            } else if(item.hex_code === '0000ff') {
                el =<div className="box blue" ></div>;
            }else if(item.hex_code === 'ffff00') {
                el =<div className="box yellow" ></div>;
            };
            return(
                <div key={index} className="swatchesBody">
                    {/* <h4>{item.id}</h4>
                    <h4>{item.hex_code}</h4> */}
                    {el}
                    <h4 className="label">{item.label}</h4>
                    <div className="label">
                        <button onClick={(event) =>this.deleteBlock(event, item.id)}>DELETE</button>
                    </div>
                </div>
            )
        })
        return (
            <div >
                <h2>Color Swatches</h2>
                {colorBlocks}
            </div>
        )
    }
}

export default connect(mapStateToProps)(Swatches);