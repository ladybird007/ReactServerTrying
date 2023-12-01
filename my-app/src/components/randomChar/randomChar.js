import React, {Component} from 'react';
import './randomChar.css';
import gotService from '../../services/gotService';
import Spinner from '../spinner';

export default class RandomChar extends Component {

    constructor() {
        super();
        this.updateChar();
    }

    gotService = new gotService();
    state = {
        char: {},
        loading: true
    }

    onCharLoaded = (char) => {
        this.setState({
            char,
            loading: false
        });
    }

    updateChar() {
        const id = Math.floor(Math.random()*140 + 25); // from 25 to 140 chars
        this.gotService.getCharacter(id)
            .then(this.onCharLoaded);
    }

    render() {

        const {char: {name, gender, born, died, culture}, loading} = this.state;
        
        return (
            <div className="random-block rounded">
                <h4>Random Character: {loading ? <Spinner/> : name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Gender </span>
                        <span>{loading ? <Spinner/> : gender}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Born </span>
                        <span>{loading ? <Spinner/> : born}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Died </span>
                        <span>{loading ? <Spinner/> : died}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Culture </span>
                        <span>{loading ? <Spinner/> : culture}</span>
                    </li>
                </ul>
            </div>
        );
    }
}
