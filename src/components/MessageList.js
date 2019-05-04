import Message from './Message';
import React, { Component } from 'react';
import axios from 'axios';
class MessageList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cats: []
    }
  }
  componentDidMount() {
    axios.get("https://us-central1-assignment-web-tech-fff2c.cloudfunctions.net/api/api/member").then(res => {
      this.setState({ cats: res.data }) 
      console.log(res.data);
    })
  }
  render() {
    return (
      this.state.cats.map(function (object, cat) {
        return (
          <div class="card">
            <div class="card-content">
              {/* <p class="title"> */}
                <Message obj={object} key={cat} />
              {/* </p> */}
            </div>
          </div>
        );
      })

    )
  }
}
export default MessageList