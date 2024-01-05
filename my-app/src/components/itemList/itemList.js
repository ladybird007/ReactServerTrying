import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './itemList.css';
import Spinner from '../spinner';

function ItemList({getData, onItemSelected, renderItem, onClickState}) {

  const [itemList, updateList] = useState([]);

  useEffect(() => {
    getData()
    .then( (data) => {
        updateList(data)
    })
  }, [])

  function renderItems(arr) {
      return arr.map((item) => {
        const {id} = item;
        const label = onClickState ? renderItem(item) : <Link to={id}>{renderItem(item)}</Link> ;

        return (
          <li 
              key={id}
              className="list-group-item"
              onClick={onClickState ? () => onItemSelected(id) : undefined }
          >
            {label}
          </li>
        )
      });
    }

    if(!itemList) {
        return <Spinner/>
    }

    const items = renderItems(itemList);

    return (
        <ul className="item-list list-group">
            {items}
        </ul>
    );
}
export default ItemList;