// This file is used to Add an Form to the 'Groceries List'
import { React, useRef } from 'react'
import { FaPlus } from 'react-icons/fa'

const AddItem = ({ newItem, setNewItem, handleSubmit}) => {
    // Create inputRef that is set to useRef hook that re-focuses to reference point 'input'
    const inputRef = useRef()

  return (
    <form className='addForm' onSubmit={handleSubmit}>
      <label htmlFor="addItem">Add Item</label>
      <input
        type="text"
        autoFocus
        ref={inputRef}
        id='addItem'
        placeholder='Add Item'
        required
        // Make input a controlled component by adding a value and onChange event
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
    />
    <button 
        type='submit'
        aria-label='Add Item'   
        // Set onClick to useRef current value 
        onClick={() => inputRef.current.focus()}
    >
        <FaPlus />
    </button>
    </form>
  )
}

export default AddItem
