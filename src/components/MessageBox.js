import React, { Component } from 'react';
import axios from 'axios';

var BtnStyle = {
  float: "right",
  marginRight: 2
}

class MessageBox extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
    this.state = {
      message: '',
      l: ''
    }
  }
  componentDidMount() {
    axios.get("https://us-central1-assignment-web-tech-fff2c.cloudfunctions.net/api/api/member").then(res => {
      this.l = res.data.length
      console.log(res.data);
    });
  }
  onChange(e) {
    this.setState({
      message: e.target.value
    });
  }
  onKeyUp(e) {
    if (e.keyCode === 13&&(e.target.value) !== '') {
      e.preventDefault();
      axios.post("https://us-central1-assignment-web-tech-fff2c.cloudfunctions.net/api/api/member",{
        Id : this.l,
        Name: e.target.value
      }).then(res => {
        this.setState({
          message: ''

        })
      });
    }
  }
  render() {
    return (
      <form>
        <div>
          <div class="control">
            <textarea class="input is-primary" placeholder="กรุณาใส่สายพันธ์เเมว"
              onChange={this.onChange}
              onKeyUp={this.onKeyUp}
              value={this.state.message}>
              ></textarea>
          </div>
        </div>
      </form>
    )
  }
}
export default MessageBox