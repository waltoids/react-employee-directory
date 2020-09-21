import React from 'react';

function TableHeader(props) {
  const { children, direction, onClick } = props;

  function sortButton(directionState, onClickHandler) {
    if (onClickHandler != null) {
      return directionState === 'ascending'
        ? (
          <i
            className="fas fa-sort-up ml-2"
            onClick={onClickHandler}
            onKeyPress={onClickHandler}
            role="button"
            tabIndex="0"
            aria-label="Ascending"
          />
        )
        : (
          <i
            className="fas fa-sort-down ml-2"
            onClick={onClickHandler}
            onKeyPress={onClickHandler}
            role="button"
            tabIndex="0"
            aria-label="Descending "
          />
        );
    }
    return <></>;
  }
  return (
    <th scope="col">
      <div className="d-flex justify-content-between">
        { children }
        <div className="d-flex flex-column justify-content-center">
          {sortButton(direction, onClick)}
        </div>
      </div>
    </th>
  );
}
export default TableHeader;