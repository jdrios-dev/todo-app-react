import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './ListItems.css';

function ListItems(props){
  const items = props.items;
  const listItems = items.map(item => {
    return <div className='list' key={item.key}>
      <p>
        <input
          type='text'
          id={item.key}
          value={item.text}
          onChange={
            (e) => {
              props.setUpdate(e.target.value, item.key)
            }
          }
        >
          
        </input> 
      </p>
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
