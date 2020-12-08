// React Basic and Bootstrap
import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
// import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

//import images
import about from '../../../../../../images/event/about.jpg';

class About extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { course } = this.props;
    if(course){
      return (
        <React.Fragment>


          <div className="bg-light rounded">

            <Row className="align-items-center">
              <Container>
                <Col lg="12">
                  <div className="section-title p-5">
                    {/* <h4 className="title mb-4">Business Startup Conference</h4> */}
                    <ReactMarkdown source={course.About} />
                    <div className="mt-4 pt-2">
                      {/* <Link to="#" className="btn btn-outline-primary">Read More <i className="mdi mdi-chevron-right"></i></Link> */}
                    </div>
                  </div>
                </Col>
              </Container>
            </Row>

          </div>


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