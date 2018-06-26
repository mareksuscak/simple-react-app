import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

// Follow the tutorial:
// https://reactjs.org/docs/thinking-in-react.html

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
