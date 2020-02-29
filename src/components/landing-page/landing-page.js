
import React, { Component } from 'react';
// import NoteComponent from './components/landing-page/note-section';
import ClassifySectionComponent from '../classify-section/classify-section'
import './landing-page.css'
class LandingpageComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            refineText: ''
        }

        this.onRefineText = this.onRefineText.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }


    onRefineText(e) {
        alert('Your text here >>' + this.state.refineText);
        // NOTE: Add the API call here
    }
    handleChange(e) {
        this.setState({ refineText: e.target.value });
    }

    render() {
        // const companyDetail = {
        //     name: 'habilelabs',
        //     address: 'jaipur'
        //     // handleclick: this.onRefineText,
        // }



        return (
            <div className="landing-page">



                <div id="overlayer"></div>
                {/* <div className="loader">
                    <div className="spinner-border text-primary" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div> */}
                <div className="site-wrap" id="home-section">

                    <div className="site-mobile-menu site-navbar-target">
                        <div className="site-mobile-menu-header">
                            <div className="site-mobile-menu-close mt-3">
                                <span className="icon-close2 js-menu-toggle"></span>
                            </div>
                        </div>
                        <div className="site-mobile-menu-body"></div>
                    </div>
                    <div>

                    </div>
                </div>

                <header className="site-navbar py-4 js-sticky-header site-navbar-target" role="banner">

                    <div className="container">
                        <div className="row align-items-center">

                            <div className="col-6 col-md-3 col-xl-4  d-block">
                                <h1 className="mb-0 site-logo"><a href="index.html" className="text-black h2 mb-0">ditto<span className="text-primary">.</span> </a></h1>
                            </div>

                            <div className="col-12 col-md-9 col-xl-8 main-menu">
                                <nav className="site-navigation position-relative text-right" role="navigation">

                                    <ul className="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block ml-0 pl-0">
                                        <li><a href="#home-section" className="nav-link">Home</a></li>
                                        <li><a href="#features-section" className="nav-link">Features</a></li>
                                        <li className="has-children">
                                            <a href="#about-section" className="nav-link">About Us</a>
                                            <ul className="dropdown arrow-top">
                                                <li><a href="#" target="_blank" className="nav-link"><span className="text-primary">More Free Templates</span></a></li>
                                                <li><a href="#our-team-section" className="nav-link">Our Team</a></li>
                                                <li className="has-children">
                                                    <a href="#">More Links</a>
                                                    <ul className="dropdown">
                                                        <li><a href="#">Menu One</a></li>
                                                        <li><a href="#">Menu Two</a></li>
                                                        <li><a href="#">Menu Three</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li><a href="#testimonials-section" className="nav-link">Testimonials</a></li>
                                        <li><a href="#blog-section" className="nav-link">Blog</a></li>
                                        <li><a href="#contact-section" className="nav-link">Contact</a></li>
                                    </ul>
                                </nav>
                            </div>


                            <div className="col-6 col-md-9 d-inline-block d-lg-none ml-md-0" ><a href="#" className="site-menu-toggle js-menu-toggle text-black float-right"><span className="icon-menu h3"></span></a></div>

                        </div>
                    </div>

                </header>



                {/* <div className="site-blocks-cover" style="overflow: hidden;"> */}
                <div className="site-blocks-cover" >
                    <div className="container">
                        <div className="row align-items-center justify-content-center">

                            {/* <div className="col-md-12" style="position: relative;" data-aos="fade-up" data-aos-delay="200"> */}
                            <div className="col-md-12" data-aos="fade-up" data-aos-delay="200">

                                {/* <img src="images/undraw_investing_7u74.svg" alt="Image" className="img-fluid img-absolute" />  */}

                                



                                <div className="row mb-4" data-aos="fade-up" data-aos-delay="200">
                                    <div className="col-lg-6 mr-auto">
                                        <h1>Classify here</h1>
                                       
                                        <ClassifySectionComponent />

                                    </div>

                                </div>



                                <div className="row mb-4" data-aos="fade-up" data-aos-delay="200">
                                    <div className="col-lg-6 mr-auto">
                                        <h1>Make Your Business More Profitable</h1>
                                        <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam assumenda ea quo cupiditate facere deleniti fuga officia.</p>
                                        <div>
                                            <a href="#" className="btn btn-primary mr-2 mb-2">Get Started</a>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="site-section" id="features-section">
                    <div className="container">
                        <div className="row mb-5 justify-content-center text-center" data-aos="fade-up">
                            <div className="col-7 text-center  mb-5">
                                <h2 className="section-title">Imagine Features</h2>
                                <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga quos quaerat sapiente nam, id vero.</p>
                            </div>
                        </div>
                        <div className="row align-items-stretch">
                            <div className="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up">

                                <div className="unit-4 d-block">
                                    <div className="unit-4-icon mb-3">
                                        <span className="icon-wrap"><span className="text-primary icon-autorenew"></span></span>
                                    </div>
                                    <div>
                                        <h3>Marketing Consulting</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                                        <p><a href="#">Learn More</a></p>
                                    </div>
                                </div>

                            </div>
                            <div className="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up" data-aos-delay="100">

                                <div className="unit-4 d-block">
                                    <div className="unit-4-icon mb-3">
                                        <span className="icon-wrap"><span className="text-primary icon-store_mall_directory"></span></span>
                                    </div>
                                    <div>
                                        <h3>Market Analysis</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                                        <p><a href="#">Learn More</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up" data-aos-delay="200">
                                <div className="unit-4 d-block">
                                    <div className="unit-4-icon mb-3">
                                        <span className="icon-wrap"><span className="text-primary icon-shopping_basket"></span></span>
                                    </div>
                                    <div>
                                        <h3>Easy Purchase</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                                        <p><a href="#">Learn More</a></p>
                                    </div>
                                </div>
                            </div>


                            <div className="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up">
                                <div className="unit-4 d-block">
                                    <div className="unit-4-icon mb-3">
                                        <span className="icon-wrap"><span className="text-primary icon-settings_backup_restore"></span></span>
                                    </div>
                                    <div>
                                        <h3>Free Updates</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                                        <p><a href="#">Learn More</a></p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up" data-aos-delay="100">
                                <div className="unit-4 d-block">
                                    <div className="unit-4-icon mb-3">
                                        <span className="icon-wrap"><span className="text-primary icon-sentiment_satisfied"></span></span>
                                    </div>
                                    <div>
                                        <h3>100% Satistified</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                                        <p><a href="#">Learn More</a></p>
                                    </div>
                                </div>


                            </div>

                            <div className="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up" data-aos-delay="200">
                                <div className="unit-4 d-block">
                                    <div className="unit-4-icon mb-3">
                                        <span className="icon-wrap"><span className="text-primary icon-power"></span></span>
                                    </div>
                                    <div>
                                        <h3>Easy Plugin</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                                        <p><a href="#">Learn More</a></p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


                <div className="feature-big">
                    <div className="container">
                        <div className="row mb-5 site-section">
                            <div className="col-lg-7" data-aos="fade-right">
                                <img src="images/undraw_gift_card_6ekc.svg" alt="Image" className="img-fluid" />
                            </div>
                            <div className="col-lg-5 pl-lg-5 ml-auto mt-md-5">
                                <h2 className="text-black">Communicate and gather feedback</h2>
                                <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem neque nisi architecto autem molestias corrupti officia veniam.</p>

                                <div className="author-box" data-aos="fade-left">
                                    <div className="d-flex mb-4">
                                        <div className="mr-3">
                                            <img src="images/person_4.jpg" alt="Image" className="img-fluid rounded-circle" />
                                        </div>
                                        <div className="mr-auto text-black">
                                            <strong className="font-weight-bold mb-0">Grey Simpson</strong> <br />
                                            Co-Founder, XYZ Inc.
                                            </div>
                                    </div>
                                    <blockquote>&ldquo;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus vitae ipsa asperiores inventore aperiam iure?&rdquo;</blockquote>
                                </div>
                            </div>
                        </div>

                        <div className="mt-5 row mb-5 site-section ">
                            <div className="col-lg-7 order-1 order-lg-2" data-aos="fade-left">
                                <img src="images/undraw_metrics_gtu7.svg" alt="Image" className="img-fluid" />
                            </div>
                            <div className="col-lg-5 pr-lg-5 mr-auto mt-5 order-2 order-lg-1">
                                <h2 className="text-black">Communicate and gather feedback</h2>
                                <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem neque nisi architecto autem molestias corrupti officia veniam</p>



                                <div className="author-box" data-aos="fade-right">
                                    <div className="d-flex mb-4">
                                        <div className="mr-3">
                                            <img src="images/person_1.jpg" alt="Image" className="img-fluid rounded-circle" />
                                        </div>
                                        <div className="mr-auto text-black">
                                            <strong className="font-weight-bold mb-0">Kimberly Gush</strong> <br />
                                            Co-Founder, XYZ Inc.
                                        </div>
                                    </div>
                                    <blockquote>&ldquo;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus vitae ipsa asperiores inventore aperiam iure?&rdquo;</blockquote>
                                </div>
                            </div>
                        </div>

                        <div className="row mb-5 site-section">
                            <div className="col-lg-7" data-aos="fade-right">
                                <img src="images/undraw_gift_card_6ekc.svg" alt="Image" className="img-fluid" />
                            </div>
                            <div className="col-lg-5 pl-lg-5 ml-auto mt-md-5">
                                <h2 className="text-black">Communicate and gather feedback</h2>
                                <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem neque nisi architecto autem molestias corrupti officia veniam.</p>

                                <div className="author-box" data-aos="fade-left">
                                    <div className="d-flex mb-4">
                                        <div className="mr-3">
                                            <img src="images/person_4.jpg" alt="Image" className="img-fluid rounded-circle" />
                                        </div>
                                        <div className="mr-auto text-black">
                                            <strong className="font-weight-bold mb-0">Grey Simpson</strong> <br />
                                            Co-Founder, XYZ Inc.
                                        </div>
                                    </div>
                                    <blockquote>&ldquo;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus vitae ipsa asperiores inventore aperiam iure?&rdquo;</blockquote>
                                </div>
                            </div>
                        </div>

                        <div className="mt-5 row mb-5 site-section ">
                            <div className="col-lg-7 order-1 order-lg-2" data-aos="fade-left">
                                <img src="images/undraw_metrics_gtu7.svg" alt="Image" className="img-fluid" />
                            </div>
                            <div className="col-lg-5 pr-lg-5 mr-auto mt-5 order-2 order-lg-1">
                                <h2 className="text-black">Communicate and gather feedback</h2>
                                <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem neque nisi architecto autem molestias corrupti officia veniam</p>



                                <div className="author-box" data-aos="fade-right">
                                    <div className="d-flex mb-4">
                                        <div className="mr-3">
                                            <img src="images/person_1.jpg" alt="Image" className="img-fluid rounded-circle" />
                                        </div>
                                        <div className="mr-auto text-black">
                                            <strong className="font-weight-bold mb-0">Kimberly Gush</strong> <br />
                                            Co-Founder, XYZ Inc.
                                        </div>
                                    </div>
                                    <blockquote>&ldquo;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus vitae ipsa asperiores inventore aperiam iure?&rdquo;</blockquote>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                {/* 

                <div className="main-section">

                    <div className="play-area">
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

                        <div className="row">
                            <div className="col-sm-6">
                                <button type="button" className="btn btn-info" onClick={this.onRefineText}> Ditto</button>
                            </div>
                        </div>

                    </div>
                </div> */}

                {/* <p>This is the parent component</p> */}
                {/* Hello <NoteComponent {...companyDetail} /> */}
            </div >
        );
    }
}
export default LandingpageComponent;