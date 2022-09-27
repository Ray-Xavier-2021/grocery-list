// This file is an embedded component in the Content component

import React from 'react'
// Import Font Awesome icons for react
// import { FaTrashAlt } from 'react-icons/fa'
import Item from './Item'

const ItemList = ({ items, handleCheck, handleDelete }) => {
  return (
    <ul className='grocery--list-ul'>
        {/* Use map to go through each item and place in li */}
        {items.map((item) => (
            // // In React all list items require a key
            // // key is used to track the state: change, removed or updated
            // <li className="item" key={item.id}>
            //     <input 
            //         type="checkbox"  
            //         // This handles the checkbox pertaining to id
            //         onChange={() => handleCheck(item.id)}
            //         checked={item.checked}
            //     />
            //     <label
            //         // Ternary that check if checkbox is checked and sets style / if not do nothing
            //         style={item.checked ? { textDecoration: 'line-through'} : null}
            //         // Set onDoubleClick to label that checks the checkbox
            //         onDoubleClick={() => handleCheck(item.id)}
            //     >{item.item}</label>
            //     <FaTrashAlt 
            //     onClick={() => handleDelete(item.id)}
            //         role='button' 
            //         tabIndex='0' 
            //     />
            // </li>
            <Item 
                key={item.id}
                item={item}
                handleCheck={handleCheck}
                handleDelete={handleDelete}
            />
        ))}
    </ul>
  )
}

export default ItemList