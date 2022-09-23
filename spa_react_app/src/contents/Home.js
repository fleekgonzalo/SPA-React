import React, {Component} from 'react';

import { 
    Container,
    Row,
    Col
} from 'react-bootstrap';

import TypewriterEffect from "react-typewriter-effect";
import AOS from 'aos';

import userpic from '../assets/resources/user.jpg';

import Social from '../components/Social';

import '../assets/scss/home.scss';

class Home extends Component {
    componentDidMount() {
        AOS.init();
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col lg={7}>
                        <TypewriterEffect
                            textStyle={
                                { fontWeight: 'bold', fontSize: '5rem', marginBottom: '2rem', lineHeight: '1.2' }
                            }
                            startDelay={100}
                            cursorColor="black"
                            text="Hi there, I'm Madhura"
                            typeSpeed={50}
                            hideCursorAfterText={true}
                        />

                        <TypewriterEffect
                            textStyle={
                                { fontWeight: '400', fontSize: '1.2rem', marginBottom: '2rem' }
                            }
                            startDelay={1600}
                            cursorColor="black"
                            text="I'm a UI/UX Developer at Precise Communications Design LLC."
                            typeSpeed={40}
                            hideCursorAfterText={true}
                        />
                    </Col>
                    <Col>
                        <div className="imgwrp">
                            <img src={userpic} className="img-fluid"/>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Social/>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Home;