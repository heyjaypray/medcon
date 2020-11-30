// React Basic and Bootstrap
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import Services from '../Services'

//Slider
import OwlCarousel from 'react-owl-carousel';
import '../../../../node_modules/owl.carousel/dist/assets/owl.carousel.css';
import '../../../../node_modules/owl.carousel/dist/assets/owl.theme.default.css';


class Section extends Component {

    constructor(props) {
        super(props);
        this.state = {
            autoplay: true
        }
    }

    render() {
        const { items, categories } = this.props

        console.log('items', items)
        return (
            <React.Fragment>
                 <section className="main-slider">
                        <OwlCarousel
                            className="owl-theme"
                            items={1}
                            loop
                            nav={true}
                            autoplay = {true}
                        >
                            {
                                this.props.items.map((item, key) =>
                                    <li key={key} className="d-flex align-items-center" >
                                        <div></div>
                                                <Container>
                                                    <Row className="justify-content-center">
                                                        <Col xs="12" className="text-center">
                                                            <Services items={item} category={categories[key]} />
                                                        </Col>
                                                    </Row>
                                                </Container>
                                    </li>
                                )
                            }
                        </OwlCarousel>
                </section>
            </React.Fragment>
        );
    }
}

export default Section;