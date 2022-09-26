import React from 'react'
import { useState } from 'react'
import AddItem from './AddItem'

// // Import Font Awesome icons for react
// import { FaTrashAlt } from 'react-icons/fa'
import ItemList from './ItemList'

const Content = ({ items, handleCheck, handleDelete}) => {
    // Create a default useState 
    // const [items, setItems] = useState([
    //     {
    //         id: 1,
    //         checked: true,
    //         item: 'Item 1'
    //     },
    //     {
    //         id: 2,
    //         checked: false,
    //         item: 'Item 2'
    //     },
    //     {
    //         id: 3,
    //         checked: false,
    //         item: 'Item 3'
    //     }
    // ])

    // /*
    //     Function to handle checkbox

    //     Handle list items that are checked
    //         Map through items and check if item id equal to id of event
    //         Return new item if id's are equal and change checked status
    //         Else return item
        
    //     Set Items using List Item variable

    //     Set local storage so that access to previous state data is attainable
    // */
    // const handleCheck = (id) => {
    //     const listItems = items.map((item) => item.id === id ? {...item, checked: !item.checked } : item)
    //     setItems(listItems)
    //     localStorage.setItem('shopping-list', JSON.stringify(listItems))
    //     // console.log(listItems)
    //     // console.log(`checked: ${id}`)
    // }

    // /*
    //     Function to handle delete

    //     Filter array of items 
    //         Check if item id is not equal to id
    //         Note: New array will contain items not equal to id

    //     Set items using listItems array

    //     Set local storage so that access to previous state data is attainable
    // */
    // const handleDelete = (id) => {
    //     const listItems = items.filter((item) => item.id !== id)
    //     setItems(listItems)
    //     localStorage.setItem('shopping-list', JSON.stringify(listItems))
    //     // console.log(listItems);
    //     // console.log(`delete: ${id}`);
    // }

  return (
    <>
      {/* Ternary that check if length of list is empty if empty give message / return list */}
      {items.length ? (
              // <ul className='grocery--list-ul'>
              //     {/* Use map to go through each item and place in li */}
              //     {items.map((item) => (
              //         // In React all list items require a key
              //         // key is used to track the state: change, removed or updated
              //         <li className="item" key={item.id}>
              //             <input 
              //                 type="checkbox"  
              //                 // This handles the checkbox pertaining to id
              //                 onChange={() => handleCheck(item.id)}
              //                 checked={item.checked}
              //             />
              //             <label
              //                 // Ternary that check if checkbox is checked and sets style / if not do nothing
              //                 style={item.checked ? { textDecoration: 'line-through'} : null}
              //                 // Set onDoubleClick to label that checks the checkbox
              //                 onDoubleClick={() => handleCheck(item.id)}
              //             >{item.item}</label>
              //             <FaTrashAlt 
              //             onClick={() => handleDelete(item.id)}
              //                 role='button' 
              //                 tabIndex='0' 
              //             />
              //         </li>
              //     ))}
              // </ul>
              <ItemList 
                  items={items}
                  handleCheck={handleCheck}
                  handleDelete={handleDelete}
              />
          ) : (
              <p 
              style={{margin: 'auto', textAlign: 'center'}}>Your List is empty!</p>
          )}
    </>
  )
}

export default Content
