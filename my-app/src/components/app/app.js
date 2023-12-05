import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Button from 'react-bootstrap/Button';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';


export default class App extends Component {
    state = {
        randomChar: true
    }

    toggleButton = () => {
        this.setState({randomChar: !this.state.randomChar})
        /* if (this.state.randomChar) {
            this.setState({
                randomChar: false
            });
        } else {
            this.setState({
                randomChar: true
            });
        } */
    }

    render() {
        const {randomChar} = this.state;
        const activeClass = randomChar ? 'primary' : 'outline-primary'; 
        const content = randomChar ? <RandomChar/> : null;
        return (
            <> 
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Col lg={{size: 5, offset: 0}} className='mb-4'>
                            {content}
                            <Button variant={activeClass} onClick={()=>this.toggleButton()}>Toggle</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col md='6'>
                            <ItemList />
                        </Col>
                        <Col md='6'>
                            <CharDetails />
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
    
};