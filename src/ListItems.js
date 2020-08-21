import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './ListItems.css';

function ListItems(props){
  const items = props.items;
  const listItems = items.map(item => {
    return <div className='list' key={item.key}>
      <p>{item.text}</p>
      <span>
        <FontAwesomeIcon
          className='faicons'
          icon='trash'
          onClick={ () => props.deleteItem(item.key)}
        />
      </span>
    </div>
  })
  return(
    <div className='listItem'>{listItems}</div>   
  )
}

export default ListItems;
