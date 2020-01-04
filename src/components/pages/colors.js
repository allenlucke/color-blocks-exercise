import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = reduxState => ({
    reduxState,
})

class Colors extends Component {
    componentDidMount() {
        this.props.dispatch({
            type: 'GET_COLORS'
        })
    }
    render() {
        const colorList = this.props.reduxState.getColorsReducer.map((item, index) => {
            const el = `#${item.hex_code}`
            return(
                <tbody key={index}>
                    <tr>
                        <td>{item.label}</td>
                        <td>{item.hex_code}</td>
                        <td style= {{backgroundColor: el }} ></td>
                        <td><button>Delete</button></td>
                    </tr>
                </tbody>
            )
        })
        return (
            <div>
                <h2>Color Settings</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Label</th>
                            <th>Hex Code</th>
                            <th>Block</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                        {colorList}
                </table>
            </div>
        )
    }
}

export default connect(mapStateToProps)(Colors);