import React, {Component} from 'react';
import ItemDetails, {Field} from '../itemDetails';
import gotService from '../../services/gotService';

export default class BookItem extends Component {
    gotService =  new gotService();

    render() {
        
        const selectedBook = window.location.href.split('/').slice(-1);

        return (
            <ItemDetails 
                itemId={selectedBook} 
                itemGotService={this.gotService.getBook}>
                <Field field='numberOfPages' label='Number of pages' />
                <Field field='publiser' label='Publiser' />
                <Field field='released' label='Released' />
            </ItemDetails>
        )
    }
}