import React from 'react';
import ReactDom from 'react-dom';
import { JsxElement } from 'typescript';

interface AppProps {
  color?: string;
}

const App = (props: AppProps): JSX.Element =>{
return <div>{props.color}</div>
}

// interface AppState {
//   counter: number;
// }

// class App extends React.Component<AppProps, AppState> {
//   //Property way
//   state = { counter: 0 };

//   //Constructor way
//   constructor(props: AppProps) {
//     super(props);

//     this.state = { counter: 0 };
//   }

//   onIncrement = (): void => {
//     this.setState({ counter: this.state.counter + 1 });
//   };
//   onDecrement = (): void => {
//     this.setState({ counter: this.state.counter - 1 });
//   };

//   render() {
//     return (
//       <div>
//         <button onClick={this.onIncrement}>Increment</button>
//         <button onClick={this.onDecrement}>Decrement</button>
//         {this.state.counter}
//       </div>
//     );
//   }
// }

ReactDom.render(<App color="red"/>, document.querySelector('#root'));
