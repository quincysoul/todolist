import './App.css';
import React from 'react';
import List from './components/List';

const mockListElements = [
  { 'completed': false, 'title': 'Learn React.js' },
  { 'completed': false, 'title': 'Learn Node.js' },
];

function App() {
  return (
    <>
      <div className="App">
        <h1>APP COMPONENT</h1>
        <header className="App-header">
          Epic to do list
        </header>
        <List listElements={mockListElements} />
      </div>
    </>
  );
}

export default App;
