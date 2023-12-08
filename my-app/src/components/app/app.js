import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Button from 'react-bootstrap/Button';
import Header from '../header';
import RandomChar from '../randomChar';
import ErrorMessage from '../error';
import CharacterPage from '../characterPage';
import BookPage from '../bookPage';
import HousePage from '../housePage';
import {createBrowserRouter, RouterProvider, BrowserRouter as Router, Route, Routes} from 'react-router-dom';

const router = createBrowserRouter([
    {
        path: "/",
        element: ""
    },
    {
        path: "/characters",
        element: <CharacterPage/>,
    },
    {
        path: "/books",
        element: <BookPage/>,
    },
    {
        path: "/houses",
        element: <HousePage/>,
    },
    {
        path: "*",
        element: <ErrorMessage/>,
    },
]);

export default class App extends Component {
    state = {
        randomChar: true,
        error: false
    }

    componentDidCatch() {
        console.log('error');
        this.setState({
            error: true
        })
    }

    toggleRandomChar = () => {
        this.setState({randomChar: !this.state.randomChar})
    }

    render() {
        const {randomChar} = this.state;
        const activeClass = randomChar ? 'primary' : 'outline-primary'; 
        const char = randomChar ? <RandomChar/> : null;

        if (this.state.error) {
            return <ErrorMessage/>
        }

        return (
            <Router>
                <div className="app">
                    <Container>
                        <Header />
                    </Container>
                    <Container>
                        <Row>
                            <Col lg={{size: 12, offset: 0}} className='mb-4'>
                                {char}
                                <Button variant={activeClass} onClick={()=>this.toggleRandomChar()}>Toggle</Button>
                            </Col>
                        </Row>
                        
                        <RouterProvider router={router} />
                    </Container>
                </div>
            </Router>
        );
    }
    
};