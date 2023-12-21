import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './itemList.css';
import Spinner from '../spinner';
import gotService from '../../services/gotService';

class ItemList extends Component {

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
        
      const {data} = this.props;
      const items = this.renderItems(data);

      return (
          <ul className="item-list list-group">
              {items}
          </ul>
      );
    }
}

const withData = (View, getData) => {
  return class extends Component {
    state = {
      data: null
    }
  
    componentDidMount() {
  
      getData()
        .then( (data) => {
            this.setState({
                data
            })
        })
    }
  
    render() {
      const {data} = this.state;
  
      if(!data) {
          return <Spinner/>
      }
      return <View {...this.props} data={data} />
    }
  }
}

const {getAllCharacters} = new gotService();
export default withData(ItemList, getAllCharacters);