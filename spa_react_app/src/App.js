import React, { Component } from 'react';
import {
    Route,
    NavLink,
    HashRouter
} from 'react-router-dom';

import Container from 'react-bootstrap/Container';

import Home from './contents/Home';
import About from './contents/About';
import Experience from './contents/Experience';
import Contact from './contents/Contact';

import logo from './assets/resources/logo_transprntbk.png';

import './assets/scss/navbar.scss';

class App extends Component {
    componentDidMount() {
        /**
         * Easy selector helper function
         */
        const select = (el, all = false) => {
            el = el.trim()
            if (all) {
                return [...document.querySelectorAll(el)]
            } else {
                return document.querySelector(el)
            }
        }

        /**
         * Easy event listener function
         */
        const on = (type, el, listener, all = false) => {
            let selectEl = select(el, all)
            if (selectEl) {
                if (all) {
                    selectEl.forEach(e => e.addEventListener(type, listener))
                } else {
                    selectEl.addEventListener(type, listener)
                }
            }
        }

        /**
         * Easy on scroll event listener 
         */
        const onscroll = (el, listener) => {
            el.addEventListener('scroll', listener)
        }

        /**
         * Toggle .header-scrolled class to #header when page is scrolled
         */
        let selectHeader = select('header')
        if (selectHeader) {
            const headerScrolled = () => {
                if (window.scrollY > 100) {
                    selectHeader.classList.add('header-scrolled')
                } else {
                    selectHeader.classList.remove('header-scrolled')
                }
            }
            window.addEventListener('load', headerScrolled)
            onscroll(document, headerScrolled)
        }
    }

    render() {
      return (
        <HashRouter>
            <div>
                <Container>
                    <header>
                        <div href="" className="logo my-auto">
                            {/* <img src={logo} alt="logo"/> */}
                            <h4>Lorem Ipsum</h4>
                        </div>
                        <ul className="navbar">
                            <li>
                                <NavLink to="/home" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>About</NavLink>
                            </li>
                            <li>
                                <NavLink to="/expedu" className={({ isActive }) => isActive ? "active" : ""}>Work Experience &amp; Education</NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink>
                            </li>
                        </ul>
                    </header>
                </Container>

                <div className="clear"></div>

                <Container>
                    <div className="content">
                        <Route exact path="/" component={Home}/>
                        <Route path="/home" component={Home}/>
                        <Route path="/about" component={About}/>
                        <Route path="/expedu" component={Experience}/>
                        <Route path="/contact" component={Contact}/>
                    </div>
                </Container>
            </div>
        </HashRouter>
      );
    }
}

export default App;