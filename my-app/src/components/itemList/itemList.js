import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './itemList.css';
import Spinner from '../spinner';
export default class ItemList extends Component {

    state = {
      itemList: null,
    }

    componentDidMount() {
      const {getData} = this.props;

      getData()
        .then( (itemList) => {
            this.setState({
                itemList
            })
        })
    }

    renderItems(arr) {
      const {onClickState} = this.props;

      return arr.map((item) => {
        const {id} = item;
        const label = onClickState ? this.props.renderItem(item) : <Link to={id}>{this.props.renderItem(item)}</Link> ;

        return (
          <li 
              key={id}
              className="list-group-item"
              onClick={onClickState ? () => this.props.onItemSelected(id) : undefined }
          >
            {label}
          </li>
        )
      });
    }

    render() {
        const {itemList} = this.state;

        if(!itemList) {
            return <Spinner/>
        }

        const items = this.renderItems(itemList);

        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        );
    }
}