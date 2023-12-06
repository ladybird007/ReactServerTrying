import React, {Component} from 'react';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import ErrorMessage from '../error';
import gotService from '../../services/gotService';
import RowBlock from '../rowBlock';

export default class CharacterPage extends Component {
    gotService = new gotService();

    state = {
        selectedChar: 130,
        error: false
    }

    onCharSelected = (id) => {
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

        const itemlist = (
                <ItemList 
                    onCharSelected={this.onCharSelected}
                    getData={this.gotService.getAllCharacters}
                    renderItem={({name, gender}) => `${name} (${gender})`} />
        );

        const charDetails = (
            <CharDetails charId={this.state.selectedChar} />
        )

        return (
           <RowBlock left={itemlist} right={charDetails}/> 
        )
    }
}