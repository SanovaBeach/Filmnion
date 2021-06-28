import React, {useState, useRef, useEffect} from 'react'
import { FaSearch } from 'react-icons/fa';


const SearchBar = ({setSearch}) => {
  const [input, setInput] = useState('')
  const initial = useRef(true)

  useEffect(()=> {
    if(initial.current) {
      initial.current = false
      return
    }
    // delay the searching for .5s
    const timer = setTimeout(() => {
      setSearch(input)
    }, 500)
    return () => clearTimeout(timer)
  }, [setSearch, input])

  return (
    <React.Fragment>
      <div className="SearchBar">
        <div className="SearchBar_container">
        <FaSearch className='SearchBar_icon' />
        <input 
          type="text" 
          className="SearchBar_input"
          placeholder='Search'
          onChange={ (event) => setInput(event.currentTarget.value)}
          value={input}
        />
        </div>
      </div>
    </React.Fragment>
  )
}

export default SearchBar