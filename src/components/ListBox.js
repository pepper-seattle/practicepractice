import React from 'react';
import './styles/ListBox.css';
import PropTypes from "prop-types";

export const ListBox = ({items}, handleChecker) => {
  return(
    <div>
      <div className="ListBox-title">
        <h1>To-Do List</h1>
      </div>
      <ul className="ListBox-list">
        {items.map((item, index) => (
          <li key={index} className="ListBox-listItem" onClick={handleChecker}>
            {item.text}
            <span className="ListBox-checker">{item.checked ? 'x' : 'o'}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

ListBox.propTypes = {
  items: PropTypes.array,
}

export default ListBox;