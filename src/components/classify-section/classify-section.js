import React, { Component } from 'react';
class ClassifySectionComponent extends Component {
    render() {
        const {
            name,
            address,
            handleclick
        } = this.props;

        return (
            <div className="classify-section">
                <br />
                <div className="text-center">
                    <div className="form-group">
                        <label for="exampleFormControlTextarea1">Classify your work</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>

                    <div className="form-group">
                        <div class="custom-file">
                            <input type="file" class="custom-file-input" id="customFile" />
                            <label class="custom-file-label" for="customFile">Choose file</label>
                        </div>
                    </div>

                    {/* <label className="label">{name} In {address}</label> */}

                    <button className="btn btn-primary" onClick={handleclick}>Classify</button>
                </div>
            </div>
        )
    }
}
export default ClassifySectionComponent;

