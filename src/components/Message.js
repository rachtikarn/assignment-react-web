import React, {Component} from 'react';
import { Button } from 'react-bulma-components/full';
import axios from 'axios';

var BtnStyle = {
  float: "right",
  marginRight: 2
}

class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cats: []
    }
    this.onClickDelete = this.onClickDelete.bind(this);
  }
  onClickDelete(e) {
    e.preventDefault();
    axios.delete("https://us-central1-assignment-web-tech-fff2c.cloudfunctions.net/api/api/member" + this.props.obj.ID, {
    }).then(res => {
      this.setState({
        cats: ''
      })
    });
  }
  render(){
    return (
      <div>
        {this.props.obj.NAME}
        <a style={BtnStyle}
          className="button is-danger is-outlined"
          onClick={this.onClickDelete}>
          Delete
        </a>
      </div>
      
    )
  }
}
export default Message