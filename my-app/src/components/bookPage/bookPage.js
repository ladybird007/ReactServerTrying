import React, {Component} from 'react';
import {Col, Row} from 'reactstrap';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import ErrorMessage from '../error';
import gotService from '../../services/gotService';

export default class BookPage extends Component {
    gotService = new gotService();

    state = {
        selectedChar: 130,
        error: false
    }

    onItemSelected = (id) => {
        this.setState({
            selectedChar: id
        })
    }

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    render() {

        if (this.state.error) {
            return <ErrorMessage/>
        }

        return (
            <Row>
                <Col md='6' className='mb-4'>
                    <ItemList 
                        onItemSelected={this.onItemSelected}
                        getData={this.gotService.getAllBooks}
                        renderItem={(item) => `${item.name}`} />
                </Col>
                <Col md='6' className='mb-4'>
                    <CharDetails charId={this.state.selectedChar} />
                </Col>
            </Row>
        )
    }
}