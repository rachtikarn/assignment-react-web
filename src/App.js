import React, { Component } from 'react';
import Header from '../src/components/Header';
import MessageList from './components/MessageList';
import MessageBox from './components/MessageBox';
import axios from 'axios';
// import firebase from 'firebase';
class App extends Component {

  constructor(props){
    super(props);
    this.state = {member: ""}
  }
  componentDidMount(){
    axios.get("https://us-central1-assignment-web-tech-fff2c.cloudfunctions.net/api").then(res=>{
      {this.setState({member: res.data})} 
      console.log(this.member);
    })
  }

 render() {
   return (
    <div className="container">
      <Header title="RACHTIKARN SASOH 5910110279" />
      <div className="columns">
        <div className="column is-3"></div>
        <div className="column is-6">
          <MessageList/>
        </div>
      </div>
      <div className="columns">
        <div className="column is-3"></div>
        <div className="column is-6">
          <MessageBox/>
        </div>
      </div>
    </div>
   );
  }
}
export default App;