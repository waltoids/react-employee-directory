import React from 'react';

function Search(props) {
    const { onChange, name, placeholder } = props;
    return (
      <div>
        <input
          onChange={onChange}
          type="text"
          name={name || 'Search'}
          placeholder={ placeholder || 'Search List'}
        />
      </div>
    );
}

export default Search;