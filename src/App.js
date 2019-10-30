import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList'

class App extends Component {

  id = 0;

  state = {
    info: []
  }

  handleCreate = (data) => {
    const {info} = this.state
    this.setState({
      info: info.concat({
        ...data,
        id: this.id++
      })
    })
  }

  handleRemove = (id) => {
    const {info} = this.state;
    this.setState({
      info: info.filter(info => info.id !== id)
    })
  }

  render() {
    return (
      <fragment>
        <div>
          <PhoneForm onCreate={this.handleCreate}/>
          <PhoneInfoList 
            data={this.state.info}
            onRemove={this.handleRemove}
          />
        </div>
      </fragment>
    );
  }
}

export default App;