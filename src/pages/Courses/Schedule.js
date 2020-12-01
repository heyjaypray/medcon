// React Basic and Bootstrap
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import moment from 'moment';

//Import Components
import SectionTitle from '../../components/Shared/section-title';

class Schedule extends Component {

  constructor(props) {
    super(props);
    this.state = {
      firstday : [
        { id : 1, title : 'Digital Conference Event Intro', address : 'Hall 3, Sinchang-dong, Kwangju,', country : 'South Korea', time : '10:30AM to 11:15AM', day : '11', month : 'OCT' },
        { id : 2, title : 'Conference On User Interface', address : 'Hall 3, Sinchang-dong, Kwangju,', country : 'South Korea', time : '11:15AM to 12:30PM', day : '11', month : 'OCT' },
        { id : 3, title : 'Business World Event Intro', address : 'Hall 3, Sinchang-dong, Kwangju,', country : 'South Korea', time : '12:30PM to 01:00PM', day : '11', month : 'OCT' },
        { id : 4, title : 'Business Conference for professional', address : 'Hall 3, Sinchang-dong, Kwangju,', country : 'South Korea', time : '01:00PM to 02:15PM', day : '11', month : 'OCT' },
      ],
      secondday : [
        { id : 1, title : 'Digital Conference Event Intro', address : 'Hall 3, Sinchang-dong, Kwangju,', country : 'South Korea', time : '10:30AM to 11:15AM', day : '11', month : 'OCT' },
        { id : 2, title : 'Conference On User Interface', address : 'Hall 3, Sinchang-dong, Kwangju,', country : 'South Korea', time : '11:15AM to 12:30PM', day : '11', month : 'OCT' },
      ],
      thirdday : [
        { id : 1, title : 'Digital Conference Event Intro', address : 'Hall 3, Sinchang-dong, Kwangju,', country : 'South Korea', time : '10:30AM to 11:15AM', day : '11', month : 'OCT' },
        { id : 2, title : 'Conference On User Interface', address : 'Hall 3, Sinchang-dong, Kwangju,', country : 'South Korea', time : '11:15AM to 12:30PM', day : '11', month : 'OCT' },
        { id : 3, title : 'Business World Event Intro', address : 'Hall 3, Sinchang-dong, Kwangju,', country : 'South Korea', time : '12:30PM to 01:00PM', day : '11', month : 'OCT' },
      ],
      activeTab: '1'
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle(tab) {
    this.setState({ activeTab: tab });
  }

  render() {
    const { event } = this.props;
    return (
      <React.Fragment>
        <section className="section">
          <Container>
            {/* section title */}
            <SectionTitle title="Course Modules" desc=" that can provide everything you need to generate awareness, drive traffic, connect." />

            <Row>
              <Col xs="12">
                <div className="tab-content" id="pills-tabContent">
 
                  <Row>
                    { event && event.Modules ? 
                      event.Modules.map((show, key) =>
                        <Col lg={6} key={key} className="mt-4 pt-2">
                          <div className="event-schedule d-flex bg-white rounded p-3 border">
                            <div className="content">
                              <h4><Link to="#" className="text-dark title">{show.Title}</Link></h4>
                              <p className="text-muted location-time"><span className="text-dark h6">Speakers:</span> {event.speakers.map(i => {
                                return <p>{i.Name}</p>;
                              })}
                              </p>
                            </div>
                          </div>
                        </Col>
                      )
                      : null }
                  </Row>
                 
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Schedule;