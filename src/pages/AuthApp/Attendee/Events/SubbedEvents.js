import React, { Component } from 'react';
import { Container, Row, Col, UncontrolledTooltip, Progress, PaginationItem, PaginationLink, Pagination } from "reactstrap";
import { Link } from "react-router-dom";


class SubbedEvents extends Component {

    state = {
        eventIsLive: true
    }

    render() {
        const { user } = this.props;
        const { eventIsLive } = this.state;
        return (

            <Row>
                {
                    user.conferences.map((event, key) =>
                        <Col lg="6" key={key} className="mt-4 pt-2">
                            <div className="blog position-relative overflow-hidden shadow rounded">
                                <div className="position-relative">
                                    <img src={event.Photos[0].url} className="img-fluid rounded-top" alt="" />
                                    <div className="overlay rounded-top bg-dark"></div>
                                </div>
                                <div className="content p-4">
                                    <h4><Link to="#" className="title text-dark">{event.Title}</Link></h4>
                                    <div className="post-meta mt-3">
                                        <Link to={eventIsLive ? '/account/events/' + event.id : '/event/' + event.id } className="text-muted float-right readmore">View Event <i className="mdi mdi-chevron-right"></i></Link>
                                        <ul className="list-unstyled mb-0">
                                            <li className="list-inline-item mr-2"><Link to="#" className="text-muted like"><i className="mdi mdi-heart-outline mr-1"></i>{event.likes}</Link></li>
                                            <li className="list-inline-item"><Link to="#" className="text-muted comments"><i className="mdi mdi-comment-outline mr-1"></i>{event.blogComments}</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="author">
                                    <small className="text-light user d-block">{event.Description}</small>
                                    <small className="text-light date"><i className="mdi mdi-calendar-check"></i> {event.date}</small>
                                </div>
                            </div>
                        </Col>
                    )
                }
                <Col xs="12" className="mt-4 pt-2">
                    <Link to="/page-blog" className="btn btn-primary">View Event <i className="mdi mdi-chevron-right"></i></Link>
                </Col>
            </Row>

        );
    }
}

export default SubbedEvents;