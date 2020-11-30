import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

import { Parallax } from 'react-parallax';
import moment from 'moment';

//CountDown
// import Countdown from 'react-countdown-now';

// Random component
// const Completionist = () => <span>You are good to go!</span>;

// Renderer callback with condition
// const renderer = ({ hours, minutes, seconds, completed }) => {
//     if (completed) {
//         // Render a complete state
//         return <Completionist />;
//     } else {
//         // Render a countdown
//         return <React.Fragment>
//             <div className="count-down">
//                 <span className="count-number">351</span>
//                 <span className="count-head position-relative d-block">Days</span></div>
//             <div className="count-down">
//                 <span className="count-number">{hours}</span>
//                 <span className="count-head position-relative d-block">Hours</span>
//             </div> <div className="count-down">
//                 <span className="count-number">{minutes}</span>
//                 <span className="count-head position-relative d-block">Minutes</span>
//             </div> <div className="count-down">
//                 <span className="count-number">{seconds}</span>
//                 <span className="count-head position-relative d-block">Seconds</span>
//             </div>
//         </React.Fragment>
//     }
// };


class Section extends Component {


  render() {
    const { event } = this.props;
    if (event) {
      return (
        <React.Fragment>
          <Parallax
            bgImage={event.Photos ? event.Photos[0].url : ''}
            bgImageAlt="Image"
            strength={300}
          >
            <section className="bg-home d-flex align-items-center" >
              <div className="bg-overlay bg-overlay-gradient"></div>
              <Container>
                <Row className="justify-content-center">
                  <Col lg="10" className="text-center">
                    <div className="title-heading">
                      <h4 className="text-success mb-3">{moment(event.StartDate).format('MMMM D YYYY')} - {moment(event.EndDate).format('MMMM D YYYY')}</h4>
                      <h1 className="display-4 title-dark text-white font-weight-bold mb-3">{event.Title}</h1>
                      <p className="para-desc title-dark mx-auto text-light">{event.Description}</p>

                      <Row>
                        <Col md="12" className="text-center">
                          <div id="eventdown">
                            {/* <Countdown
                                                            date={Date.now() + 1199658655000}
                                                            renderer={renderer}
                                                        /> */}
                          </div>
                        </Col>
                      </Row>

                      <div className="mt-4 pt-2">
                        <Link to="#" className="btn btn-success mt-2 mr-2"><i className="mdi mdi-ticket"></i> Reserve Your Spot</Link>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </section>
            <div className="position-relative">
              <div className="shape overflow-hidden text-footer">
                <div className="text-center bg-white p-4">
                  <h5 className="text-dark mb-0">Brought to you by {event.organizer.Name}</h5>
                </div>
              </div>
            </div>

          </Parallax>
        </React.Fragment>
      )
    } else {
      return (
        <div />
      )
    }

  }
}

export default Section;