import React, { Component } from 'react';
class Header extends Component {
  render() {
    return (
      <section class="hero">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">
             {this.props.title}
          </h1>
            <h2 class="subtitle">
             {this.props.sub}
          </h2>
          </div>
        </div>
      </section>
      
    )
  }
}
export default Header