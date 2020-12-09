import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

import { Parallax } from 'react-parallax';
import moment from 'moment';


class Section extends Component {
  render() {
    const { event } = this.props;
    if (event) {
      return (
        <React.Fragment>
          <Parallax
            bgImage={event.Photos ? event.Photos[0].url : ''}
            bgImageAlt='Image'
            strength={300}
          >
            <section className='bg-home d-flex align-items-center'>
              <div className='bg-overlay bg-overlay-gradient'></div>
              <Container>
                <Row className='justify-content-center'>
                  <Col lg='10' className='text-center'>
                    <div className='title-heading'>
                      <h1 className='display-4 title-dark text-white font-weight-bold mb-3'>
                        {event.Title}
                      </h1>
                      <p className='para-desc title-dark mx-auto text-light'>
                        {event.Description}
                      </p>

                      <Row>
                        <Col md='12' className='text-center'>
                          <div id='eventdown'>
                            {/* <Countdown
                                date={Date.now() + 1199658655000}
                                renderer={renderer}
                            /> */}
                          </div>
                        </Col>
                      </Row>

                      <div className='mt-4 pt-2'>
                        <Link to='#' className='btn btn-success mt-2 mr-2'>
                          <i className='mdi mdi-ticket'></i> Subscribe
                        </Link>
                        <Link to='#' className='btn btn-success mt-2 mr-2'>
                          <i className='mdi mdi-ticket'></i> Buy Now
                        </Link>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </section>
            <div className='position-relative'>
              <div className='shape overflow-hidden text-footer'>
                <div className='text-center bg-white p-4'>
                  <h5 className='text-dark mb-0'>
                    Brought to you by{' '}
                    {event.organizer ? event.organizer.Name : 'MedCon'}
                  </h5>
                </div>
              </div>
            </div>
          </Parallax>
        </React.Fragment>
      );
    } else {
      return <div />;
    }
  }
}

export default Section;
