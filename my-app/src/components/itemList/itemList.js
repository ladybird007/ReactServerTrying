import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './itemList.css';
import Spinner from '../spinner';
import gotService from '../../services/gotService';

function ItemList (props) {

    const renderItems = (arr) => {
      const {onClickState} = props;

      return arr.map((item) => {
        const {id} = item;
        const label = onClickState ? props.renderItem(item) : <Link to={id}>{props.renderItem(item)}</Link> ;

        return (
          <li 
              key={id}
              className="list-group-item"
              onClick={onClickState ? () => props.onItemSelected(id) : undefined }
          >
            {label}
          </li>
        )
      });
    }

        
    const {data} = props;
    const items = renderItems(data);

    return (
      <ul className="item-list list-group">
          {items}
      </ul>
    );
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