import React from 'react';
import './List.scss';
import classNames from 'classnames';
import Badge from '../Badge/Badge';

const List = ({ items, isRemovable, onClick }) => {
  return (
    <ul onClick={onClick} className="list">
      {items.map((item, id) => (
        <li
          key={id}
          className={classNames(item.className, { active: item.active })}
        >
          <i>{item.icon || <Badge color={item.color} />}</i>
          <span>{item.name}</span>
        </li>
      ))}
    </ul>
  );
};

export default List;
