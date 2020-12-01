// React Basic and Bootstrap
import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
// import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

//import images
import about from '../../images/event/about.jpg';

class About extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { event } = this.props;
    if(event){
      return (
        <React.Fragment>
          <section className="section border-top">
            <Container>
              <Row>
                <Col lg='8'>
                  <div className="bg-light rounded">
                    <Row className="align-items-center">
                      <Col lg="12">
                        <div className="section-title p-5">
                          <ReactMarkdown source={event.About} />
                          <div className="mt-4 pt-2">
                            {/* <Link to="#" className="btn btn-outline-primary">Read More <i className="mdi mdi-chevron-right"></i></Link> */}
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Col>
                <Col>
                  <div className="rounded border bg-light shadow">
                    <div className="bg-primary p-4 text-center rounded-top">
                      <h4 className="mb-0 title-dark text-light">Payment plan</h4>
                    </div>

                    <div className="p-4">
                      <div className="d-flex justify-content-center mb-4">
                        <span className="price text-primary font-weight-bold display-4 mb-0">2</span>
                        <span className="h4 mb-0 mt-2 text-primary">%</span>
                        <span className="h6 align-self-end font-weight-bold text-uppercase mb-2 ml-2"> Per Transection</span>
                      </div>

                      <ul className="feature list-inline">
                        <li className="h5 font-weight-normal"><i className="mdi mdi-check-decagram text-primary mr-2"></i>Transparent payouts</li>
                        <li className="h5 font-weight-normal"><i className="mdi mdi-check-decagram text-primary mr-2"></i>Deposit tagging</li>
                        <li className="h5 font-weight-normal"><i className="mdi mdi-check-decagram text-primary mr-2"></i>Control payout timing</li>
                        <li className="h5 font-weight-normal"><i className="mdi mdi-check-decagram text-primary mr-2"></i>24×7 support</li>
                      </ul>

                      {/* <Link to="" className="btn btn-primary btn-block mt-4 pt-2">Payment Now</Link> */}
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>


          </section>
          <div className="position-relative">
            <div className="shape overflow-hidden text-light">
              <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
              </svg>
            </div>
          </div>
        </React.Fragment>
      );
    } else {
      return (
        <div />
      );
    }
       
  }
}

export default About;