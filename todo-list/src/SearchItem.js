import React from 'react'

const SearchItem = ({search,setSearch}) => {
  return (
    <form className='searchItem' onSubmit={e=>e.preventDefault()}>
        <label htmlFor='search'>Search</label>
        <input 
            type="text" 
            id="search" 
            placeholder='search item' 
            role='search box' 
            value={search} 
            onChange={(e)=>setSearch(e.target.value)}
        />
    </form>
  )
}

export default SearchItem