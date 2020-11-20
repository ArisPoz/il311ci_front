import React from 'react';
import './SearchBox.css';

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className='pa2'>
      <input
        class="input-reset ba b--black-20 pa2 mb2 db w-30 center circle" 
        aria-describedby="name-desc"
        type='search'
        placeholder='Search incidents...'
        onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;