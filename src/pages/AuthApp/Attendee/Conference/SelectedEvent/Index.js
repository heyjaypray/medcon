import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col, UncontrolledTooltip, Progress, PaginationItem, PaginationLink, Pagination } from "reactstrap";
import { connect } from 'react-redux'

import SubbedEvents from '../SubbedEvents'
import Sidebar from '../../../../../components/Layout/Sidebar'
import Section from '../../../../Conferences/section'

//Import Images
import imgbg from "../../../../../images/account/bg.jpg";
import blog1 from "../../../../../images/blog/01.jpg";
import blog2 from "../../../../../images/blog/02.jpg";
import exp1 from "../../../../../images/job/Circleci.svg";
import exp2 from "../../../../../images/job/Codepen.svg";
import exp3 from "../../../../../images/job/Gitlab.svg";
import client1 from "../../../../../images/client/01.jpg";
import client2 from "../../../../../images/client/02.jpg";
import client3 from "../../../../../images/client/03.jpg";
import client4 from "../../../../../images/client/04.jpg";
import client5 from "../../../../../images/client/05.jpg";
import client6 from "../../../../../images/client/06.jpg";
import client7 from "../../../../../images/client/07.jpg";
import client8 from "../../../../../images/client/08.jpg";


import blog01 from '../../../../../images/blog/01.jpg';
import blog02 from '../../../../../images/blog/02.jpg';
import blog03 from '../../../../../images/blog/03.jpg';
import blog04 from '../../../../../images/blog/04.jpg';
import blog05 from '../../../../../images/blog/05.jpg';
import blog06 from '../../../../../images/blog/06.jpg';
import blog07 from '../../../../../images/blog/07.jpg';
import blog08 from '../../../../../images/blog/08.jpg';

// import BlogBox from "../../../../components/Shared/blog-box";

class LiveEvent extends Component {
    state = {
        blogs: [
            { id: 1, title: "Design your apps in your own way", image: blog1, likes: "33", blogComments: "08", author: "Krishta Joseph", date: "13th August, 2019" },
            { id: 2, title: "How apps is changing the IT world", image: blog2, likes: "33", blogComments: "08", author: "Krishta Joseph", date: "13th August, 2019" }
        ],
        experiences: [
            { id: 1, image: exp1, designation: "Senior Web Developer", duration: "3 Years", companyName: "", location: "London, UK" },
            { id: 2, image: exp2, designation: "Web Designer", duration: "2 Years", companyName: "CircleCi", location: "Washington D.C, USA" },
            { id: 3, image: exp3, designation: "UI Designer", duration: "2 Years", companyName: "Codepen", location: "Perth, Australia" },
        ],
        clients: [
            { id: 1, image: client1, name: "Calvin" },
            { id: 2, image: client2, name: "Meriam" },
            { id: 3, image: client3, name: "Janelia" },
            { id: 4, image: client4, name: "Cristino" },
            { id: 5, image: client5, name: "Rukshar" },
            { id: 6, image: client6, name: "Rambo" },
            { id: 7, image: client7, name: "Beardo" },
            { id: 8, image: client8, name: "Gogo" },
        ],
        pathItems: [
            //id must required
            { id: 1, name: "Home", link: "/index" },
            { id: 2, name: "Pages", link: "#" },
            { id: 3, name: "Blog", link: "#" },
            { id: 4, name: "Blog Grid" },
        ],
        blogs: [
            { id: 1, image: blog01, title: "Design your apps in your own way", like: "33", comment: "08", autor: "Calvin Carlo", date: "13th August, 2019" },
            { id: 2, image: blog02, title: "How apps is changing the IT world", like: "33", comment: "08", autor: "Calvin Carlo", date: "13th August, 2019" },
            { id: 3, image: blog03, title: "Smartest Applications for Business", like: "33", comment: "08", autor: "Calvin Carlo", date: "13th August, 2019" },
            { id: 4, image: blog04, title: "Design your apps in your own way", like: "33", comment: "08", autor: "Calvin Carlo", date: "13th August, 2019" },
            { id: 5, image: blog05, title: "How apps is changing the IT world", like: "33", comment: "08", autor: "Calvin Carlo", date: "13th August, 2019" },
            { id: 6, image: blog06, title: "Smartest Applications for Business", like: "33", comment: "08", autor: "Calvin Carlo", date: "13th August, 2019" },
            { id: 7, image: blog07, title: "Design your apps in your own way", like: "33", comment: "08", autor: "Calvin Carlo", date: "13th August, 2019" },
            { id: 8, image: blog08, title: "How apps is changing the IT world", like: "33", comment: "08", autor: "Calvin Carlo", date: "13th August, 2019" },
        ]
    }

    componentDidMount() {
        document.body.classList = "";
        document.getElementById('topnav').classList.add('bg-white');
        window.addEventListener("scroll", this.scrollNavigation, true);
    }
    // Make sure to remove the DOM listener when the component is unmounted.
    componentWillUnmount() {
        window.removeEventListener("scroll", this.scrollNavigation, true);
    }

    scrollNavigation = () => {
        var doc = document.documentElement;
        var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
        if (top > 80) {
            document.getElementById('topnav').classList.add('nav-sticky');
        }
        else {
            document.getElementById('topnav').classList.remove('nav-sticky');
        }
    }

    render() {
        const { user } = this.props;
        return (
            <React.Fragment>
                {/* <section className="bg-profile d-table w-100" style={{ background: `url(${imgbg}) center center` }}>
                    <Container>
                        
                    </Container>
                </section> */}
                {/* <Sidebar /> */}
                <section>

                    <Row className='align-items-center'>
                        <Col lg="12" md="9">
                            <Section event={user.conferences[0]} />
                        </Col>
                    </Row>

                </section>
            </React.Fragment>
        );
    }
}

const mapStateToProps = ({ users }) => {
    const { user } = users;
    return { user };
};
const mapActionsToProps = {

};

export default connect(
    mapStateToProps,
    mapActionsToProps
)(LiveEvent);
