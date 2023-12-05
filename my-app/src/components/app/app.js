import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Button from 'react-bootstrap/Button';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';


export default class App extends Component {
    state = {
        randomChar: true,
        selectedChar: 130
    }

    toggleRandomChar = () => {
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

    onCharSelected = (id) => {
        this.setState({
            selectedChar: id
        })
    }

    render() {
        const {randomChar} = this.state;
        const activeClass = randomChar ? 'primary' : 'outline-primary'; 
        const char = randomChar ? <RandomChar/> : null;
        return (
            <> 
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Col lg={{size: 5, offset: 0}} className='mb-4'>
                            {char}
                            <Button variant={activeClass} onClick={()=>this.toggleRandomChar()}>Toggle</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col md='6'>
                            <ItemList onCharSelected={this.onCharSelected} />
                        </Col>
                        <Col md='6'>
                            <CharDetails charId={this.state.selectedChar} />
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
    
};