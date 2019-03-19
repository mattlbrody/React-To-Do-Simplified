import React from 'react';

const SearchBar = (props) => {

  return (
    <div className="row">
      <form className="col s12" onSubmit={props.onFormSubmit}>
        <div className="input-field"> 
          <input placeholder="add a to do item" value={props.inputVal} type="text" onChange={e => props.updateVal(e.target.value)}/>
       </div>
      </form>
    </div>
  );

}

export default SearchBar;