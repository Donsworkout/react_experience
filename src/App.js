import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm';


class App extends Component {

  state = {
    information: []
  }

  handleCreate = (data) => {
    const {information} = this.state
    this.setState({
      information: information.concat(data)
    })
  }

  render() {
    return (
      <fragment>
        <div>
          <PhoneForm onCreate={this.handleCreate}/>
          <div>
            목록 : <br/>
            {JSON.stringify(this.state.information)}
          </div>
        </div>
      </fragment>
    );
  }
}

export default App;