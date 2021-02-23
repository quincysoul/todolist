import React from 'react';
import PropTypes from 'prop-types';
import TodoForm from './TodoForm';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
    };

    this.handleTodoSubmit = this.handleTodoSubmit.bind(this);
  }

  handleTodoSubmit(todo) {
    this.setState((prevState) => ({ todoList: [...prevState.todoList, todo] }));
  }

  render() {
    const { todoList } = this.state;
    const { listElements } = this.props;

    return (
      <div>
        {listElements.map((element, index) => (
          <>
            <div className="listItem">
              <div className="checkbox">
                {element.completed ? '[X]' : '[]'}
              </div>
              <div className="index">
                {index + 1 || ''}
              </div>
              <div className="title">
                {element.title ? element.title : ''}
              </div>
            </div>
          </>
        ))}
        {todoList.map((element, index) => (
          <>
            <div className="listItem">
              <div className="checkbox">
                {element.completed ? '[X]' : '[]'}
              </div>
              <div className="index">
                {index + 1 || ''}
              </div>
              <div className="title">
                {element.title ? element.title : ''}
              </div>
            </div>
          </>
        ))}
        <TodoForm handleTodoSubmit={this.handleTodoSubmit} />
      </div>

    );
  }
  // eslint-disable-next-line no-console
}

List.propTypes = {
  listElements: PropTypes.arrayOf(PropTypes.object),
};

List.defaultProps = {
  listElements: false,
};

export default List;
