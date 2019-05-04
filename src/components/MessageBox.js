import React, { Component } from 'react';
import axios from 'axios';
class MessageBox extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
    this.state = {
      message: ''
    };
  }
  componentDidMount() {
    axios.get("https://us-central1-dcw-my-assignment.cloudfunctions.net/api/api/members").then(res => {
      this.l = res.data.length
      // console.log(res.data);
      // this.state(res.data)
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
        Name: e.target.value,
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
          <br/>
          <div class="select is-multiple" >
            <select multiple size="3">
              <option value="cat1">cat1</option>
              <option value="cat2">cat2</option>
              <option value="cat3">cat3</option>
              <option value="cat4">cat4</option>
              <option value="cat5">cat5</option>
            </select>
          </div>
        </div>
      </form>
    )
  }
}
export default MessageBox