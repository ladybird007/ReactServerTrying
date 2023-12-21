import React, {Component} from 'react';
import ItemList from '../itemList';
import ErrorMessage from '../error';
import gotService from '../../services/gotService';

export default class BookPage extends Component {
    gotService = new gotService();

    state = {
        selectedBook: 5,
        error: false,
        onClick: false
    }

    onItemSelected = (id) => {
        this.setState({
            selectedBook: id
        })
    }

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    render() {

        const {onClick} = this.state; 

        if (this.state.error) {
            return <ErrorMessage/>
        }

        return (
            <ItemList 
                onItemSelected={this.onItemSelected}
                getData={this.gotService.getAllBooks}
                onClickState={onClick}
                renderItem={({name}) => name} />
        )
    }
}