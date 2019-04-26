import React, { Component } from 'react';
import Header from '../src/components/Header';
import MessageList from './components/MessageList';
class App extends Component {
 render() {
   return (
    <div className="container">
      <Header title="Simple Firebase App" />
      <MessageList />
    </div>
   );
  }
}
export default App;