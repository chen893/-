import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Link } from 'react-router-dom'
class Example extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }
  componentDidMount() {
    document.title =  `You clicked ${this.state.count} times`;
  }
  componentDidUpdate() {
    document.title = `You clicked ${this.state.count} times`
  }
}
function App() {

  return (
    <div>
      <Link to='comment'>comment</Link>
      <Link to= 'reply'>reply</Link>
      {/* <a href='/comment'>comment</a>
      <a href= '/reply'> reply</a> */}
    </div>
  );
}

export default App;
