
import React, { Component } from 'react';
// import NoteComponent from './components/landing-page/note-section';
import './landing-page.css'
class LandingpageComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            refineText: ''
          }
    }


    onRefineText = (e) => {
        alert('Your text here >>' + this.state.refineText);
        // NOTE: Add the API call here
    }
    handleChange = (e) => {
        this.setState({refineText:  e.target.value});
    }

    render() {
        // const companyDetail = {
        //     name: 'habilelabs',
        //     address: 'jaipur'
        //     // handleclick: this.onRefineText,
        // }



        return (
            <div className="landing-page">

                <header>
                    <nav className="navbar navbar-default">
                        <div className="container-fluid">
                            <div className="navbar-header">
                                <a className="navbar-brand" href="http://localhost:3001/">Ditto</a>
                            </div>
                            <ul className="nav navbar-nav">
                                <li className="active"><a href="http://localhost:3001/">Home</a></li>
                                <li><a href="http://localhost:3001/">Page 1</a></li>
                                <li><a href="http://localhost:3001/">Page 2</a></li>
                                <li><a href="http://localhost:3001/">Page 3</a></li>
                            </ul>
                        </div>
                    </nav>
                </header>

                <div className="main-section">

                    <div className="play-area">

                        <button type="button" className="btn btn-info" onClick={this.onRefineText}> Ditto</button>

                        <div className="row">
                            <br />
                            <div className="col-sm-6">

                                <div className="card">
                                    <div className="card-body">
                                        <div className="form-group">
                                            <textarea className="form-control" rows="5" id="comment" value={this.props.refineText} onChange={this.handleChange}></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* <p>This is the parent component</p> */}
                {/* Hello <NoteComponent {...companyDetail} /> */}
            </div >
        );
    }
}
export default LandingpageComponent;