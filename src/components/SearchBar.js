import React from 'react';

function Search(props) {
    const { onChange, name, placeholder } = props;
    return (
      <div className="search">
        <input
          onChange={onChange}
          className="searchbox"
          type="text"
          name={name || 'Search'}
          placeholder={ placeholder || 'Search List'}
        />
      </div>
    );
}

export default Search;