import { React, useState, useEffect } from 'react'
import Header from './components/Header';
import AddItem from './components/AddItem';
import SearchItem from './components/SearchItem';
import Content from './components/Content';
import Footer from './components/Footer';
import apiRequest from './apiRequest';
import './index.css';

function App() {
  /*
  Fetch API Request

  Set variable for root url
  */
  const API_URL ='https://grocery-list-server.glitch.me/items'


  /*
  Set use state for access in other files from App component

    Remove default state

  Set default state to json parse shopping-list variable from local storage
  */
  const [items, setItems] = useState([])

  // Set new Item for controlled components/inputs
  const [newItem, setNewItem] = useState('')
  // Set search component state
  const [search, setSearch] = useState('')
  // Set a fetch error state
  const [fetchError, setFetchError] = useState(null)
  // Set a is loading state
  const [isLoading, setIsLoading] = useState(true)

  /* Set useEffect that runs only when the items change/update/delete by the items dependency
  */
  useEffect(() =>{
    /*
    Create async function to fetch API data

      Try to await fetch data
        Check if data is ok/200 
          If not throw error
        Save await response in json format
        Set items to saved response
        set fetch error state to null
      
      Catch error if any
        Set fetch error to error message 
      
      Finally set is loading to false
  
      Set a timeout for 2sec before fetching data
    */
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL)
        if(!response.ok) throw Error('Did not receive data')
        const listItems = await response.json()
        setItems(listItems)
      } catch (err) {
        setFetchError(err.message)
      } finally {
        setIsLoading(false)
      }
    }
    setTimeout(() => {
      fetchData()
    }, 2000);
  }, [])

  /*
    Function to save and set items in local storage w/ item as an argument
    
    Set items w/ new items as argument

    Set item to local storage w/ string as variable, json stringify new items
  */
  // const setAndSave = (newItems)   => {
  //   setItems(newItems)
  //   localStorage.setItem('shopping-list', JSON.stringify(newItems))
  // }
  
  /*
    Function to handle add item w/ item as an argument

    Set id variable to ternary that increments id accordingly
    
    Set new item variable to object containing item properties
      Checked default state is set to false

    Set list items to update state w/ previous items and new item

    Set local storage so that access to previous state data is attainable

      UPDATE: Implement api request post method when adding items so it post item
  */
  const addItem = async (item)  => {
    const id = items.length ? items[items.length -1].id + 1 : 1
    const newListItem = {id, checked: false, item}
    const listItems = [...items, newListItem]
    setItems(listItems)
    // Create CREATE.Read.Update.Delete functions
    const postOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newListItem)
    }
    const result = await apiRequest(API_URL, postOptions)
    if (result) setFetchError(result)
  }

  
  /*
    Function to handle checkbox w/ id as an argument

    Handle list items that are checked
        Map through items and check if item id equal to id of event
        Return new item if id's are equal and change checked status
        Else return item
    
    Set Items using List Item variable

    Set local storage so that access to previous state data is attainable

      UPDATE: Implement api request post method when adding items so it updates item
  */
  const handleCheck = async (id) => {
    const listItems = items.map((item) => item.id === id ? {...item, checked: !item.checked } : item)
    setItems(listItems)

    // Create Create.Read.UPDATE.Delete functions
    const myItem = listItems.filter((item) => item.id === id)
    const updateOptions = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({checked: myItem[0].checked})
    }
    const reqUrl = `${API_URL}/${id}`
    const result = await apiRequest(reqUrl, updateOptions)
    if (result) setFetchError(result)
    // console.log(listItems)
    // console.log(`checked: ${id}`)
  }

  /*
    Function to handle delete w/ id as an argument

    Filter array of items 
        Check if item id is not equal to id
        Note: New array will contain items not equal to id

    Set items using listItems array

    Set local storage so that access to previous state data is attainable

      UPDATE: Implement api request post method when adding items so it updates item
  */
  const handleDelete = async (id) => {
    const listItems = items.filter((item) => item.id !== id)
    setItems(listItems)

    // Create Create.Read.Update.DELETE functions
    const deleteOptions = {
      method: 'DELETE'
    }
    const reqUrl = `${API_URL}/${id}`
    const result = await apiRequest(reqUrl, deleteOptions)
    if (result) setFetchError(result)
    // console.log(listItems);
    // console.log(`delete: ${id}`);
  }

  /*
    Function to handle submit

    Function takes event as an argument

    Prevent default behavior of submit button

    Check if input is empty
      if empty end function

    Set new/add item w/ newItem as an argument
  */
  const handleSubmit = (e) => {
    e.preventDefault()
    if(!newItem) return;
    addItem(newItem)
    // console.log(newItem);
    setNewItem('')
    // console.log('submit')
  }

  return (
    <>
      <Header />
      {/* Add item component */}
      <AddItem 
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem 
        search={search}
        setSearch={setSearch}
      />
      <main className='grocery--list-container'>
        {isLoading && <p style={{color: 'blue', fontSize: '2rem', textAlign: 'center', margin: '20px 0'}}>Loading Items...</p>}
        {fetchError && <p style={{color: 'red', fontSize: '2rem', textAlign: 'center', margin: '20px 0'}}>{`Error: ${fetchError}`}</p>}
        {!fetchError && !isLoading &&
          <Content 
            items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
          />
        }
      </main>
      <Footer 
        length={items.length}
      />
    </>
  );
}

export default App;
