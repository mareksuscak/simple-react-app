import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class App extends React.Component {
  render() {
    return (
      <React.StrictMode>
        Hello World
      </React.StrictMode>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'))
