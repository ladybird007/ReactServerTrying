import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Button from 'react-bootstrap/Button';
import Header from '../header';
import RandomChar from '../randomChar';
import ErrorMessage from '../error';
import {BookPage, BookItem, CharacterPage, HousePage} from '../pages';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './app.css'

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
                        <Routes>
                            <Route path="/">
                                <Route path="/characters" element={<CharacterPage/>} />
                                <Route path="/houses" element={<HousePage/>} />
                                <Route path="/books" element={<BookPage/>} />
                                <Route path="/books/:id/" element={<BookItem/>} />
                            </Route>
                        </Routes>
                    </Container>
                </div>
            </Router>
        );
    }
    
};