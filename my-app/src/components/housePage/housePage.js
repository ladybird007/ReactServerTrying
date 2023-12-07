import React, {Component} from 'react';
import {Col, Row} from 'reactstrap';
import ItemList from '../itemList';
import ItemDetails, {Field} from '../itemDetails';
import ErrorMessage from '../error';
import gotService from '../../services/gotService';
import RowBlock from '../rowBlock';

export default class HousePage extends Component {
    gotService = new gotService();

    state = {
        selectedHouse: 8,
        error: false
    }

    onItemSelected = (id) => {
        this.setState({
            selectedHouse: id
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

        const itemlist = (
            <ItemList 
                onItemSelected={this.onItemSelected}
                getData={this.gotService.getAllHouses}
                renderItem={({name}) => name} />
        );

        const houseDetails = (
            <ItemDetails 
                itemId={this.state.selectedHouse} 
                itemGotService={this.gotService.getHouse}>
                <Field field='region' label='Region' />
                <Field field='words' label='Words' />
                <Field field='overlord' label='Overlord' />
                <Field field='ancestralWeapons' label='Ancestral Weapons' />
            </ItemDetails>
        )

        return (
            <RowBlock left={itemlist} right={houseDetails}/>
        )
    }
}