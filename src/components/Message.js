import React, {Component} from 'react';
import { Button } from 'react-bulma-components/full';

class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cats: []
    }
  }
  render(){
    return (
      <div>
        {this.props.obj.NAME}
        <a class="button is-danger is-outlined">
          <span>Delete</span>
        </a>
      </div>
      
    )
  }
}
export default Message