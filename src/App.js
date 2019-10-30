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

  handleUpdate = (id, data) => {
    const {info} = this.state;
      this.setState({
        info: info.map(
          info => {
            if (info.id === id) {
              return {
                id,
                ...data,
              }
            }
            return info;
          }
        )
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
            onUpdate={this.handleUpdate}
          />
        </div>
      </fragment>
    );
  }
}

export default App;