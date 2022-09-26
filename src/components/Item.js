// THis file is an embedded component in ItemList component used for each Item

import React from 'react'

import { FaTrashAlt } from 'react-icons/fa'

const Item = ({ item, handleCheck, handleDelete }) => {
    return (
        // In React all list items require a key
        // key is used to track the state: change, removed or updated
        <li className="item">
            <input
                type="checkbox"
                // This handles the checkbox pertaining to id
                onChange={() => handleCheck(item.id)}
                checked={item.checked}
            />
            <label
                // Ternary that check if checkbox is checked and sets style / if not do nothing
                style={item.checked ? { textDecoration: 'line-through' } : null}
                // Set onDoubleClick to label that checks the checkbox
                onDoubleClick={() => handleCheck(item.id)}
            >{item.item}</label>
            <FaTrashAlt
                onClick={() => handleDelete(item.id)}
                role='button'
                tabIndex='0'
                aria-label={`Delete ${item.item}`}
            />
        </li>
    )
}

export default Item
