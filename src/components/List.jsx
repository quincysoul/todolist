import React from 'react';

function List(listElements) {
  return listElements.map((element, index) => {
    <div>
      {element.checkbox || ''}
      {' '}
      {index}
      :
      {' '}
      {element.text || ''}
    </div>;
  });
}

export default List;
