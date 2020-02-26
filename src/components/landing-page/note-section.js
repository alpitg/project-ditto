import React, { Component } from 'react';
class NoteComponent extends Component {
    render() {
        const {
            name,
            address,
            handleclick
        } = this.props;

        return (
            <div className="demo">
                <label className="label">{name} In {address}</label>

                <button onClick={handleclick}>Show</button>
            </div>
        )
    }
}
export default NoteComponent;