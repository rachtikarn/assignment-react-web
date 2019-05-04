import React, { Component } from 'react';
import Header from '../src/components/Header';
import MessageList from './components/MessageList';
import MessageBox from './components/MessageBox';

// import firebase from 'firebase';
class App extends Component {

  constructor(props) {
    super(props);
    this.state = { member: "" }
  }


  render() {
    return (
      <div className="tile is-vertical is-8">
        <Header title="CAFE CAT !!" sub="RACHTIKARN SASOH <3" />

        <div className="columns">
          <div className="column is-3"></div>
          <div className="column is-3"></div>
          <div className="column is-6">
            <MessageBox />
            <br/>
            <br/>
            <br/>
            <br/>
            <MessageList/>
          </div>
        </div>
      
        
    

       
       
      </div>
    );
  }
}
export default App;