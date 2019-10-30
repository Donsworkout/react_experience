import React, { Component } from 'react';

class PhoneForm extends Component {
  
  state = {
    name: '',
    phone: '',
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onCreate({
      name: this.state.name,
      phone: this.state.phone
    })
    this.setState({
      name: '',
      phone: ''
    })
    window.alert("제출되었습니다")
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          name="name"
          placeholder="이름"
          onChange={this.handleChange} 
          value={this.state.name} 
        />
        <input 
          name="phone"
          placeholder="전화번호"
          onChange={this.handleChange} 
          value={this.state.phone}
        />
        <button type="submit">등록하기</button>
      </form>
    );
  }
}

export default PhoneForm;