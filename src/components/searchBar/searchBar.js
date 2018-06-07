import React from 'react';

export default (props) => {
  return (
    <form onSubmit={props.onSubmit} >
      <input
        type='text'
        value={props.movieName}
        onChange={props.onChange}
        placeholder='Search Movies....'
      />
    </form>
  )
}
