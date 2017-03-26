import React from 'react';
import ReactDOM from 'react-dom';

// class App extends React.Component {
//   render(){
//     return <App />
//   }
// }

class App extends React.Component {
  render(){
    return React.createElement('h1', null, 'Hello Eggheads')
  }
}

// const App = () => <h1>Hello stateless</h1>

// export default app

ReactDOM.render(<App />, document.getElementById('app'));