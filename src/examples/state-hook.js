import  React, {useState}   from 'react';
import  ReactDOM  from 'react-dom';


// class App extends Component {;
//     constructor(props){
//         super(props);
//         this.state = {
//             count: 0,
//             text: ""
//         }
//     }
//   render() {
//     return (
//         <div>
//            <p>Butona {this.state.count} kez tıkladınız</p>
//            <button onClick={() => this.setState({count: this.state.count - 1})} >-</button>
//            <button onClick={() => this.setState({count: this.state.count + 1})} >+</button>
//         </div>
//     )
//   }
// }

// function App (props) {
//     return (
//         <div>
//             class component
//         </div>
//     )
// }

const App = (props) => {
    const [count, setCount] = useState(props.count);
    const [text, setText] = useState(props.text);
    return (
        <div>
            <p>Butona {count} kez tıkladınız</p>
            <p>Girilen Text: {text}</p>
            <button onClick={() => setCount(count - 1 )}>-</button>
            <button onClick={() => setCount(count + 1 )}>+</button>
            <button onClick={() => setCount(count - count)}>Reset</button>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
        </div>
    )
}

App.defaultProps = {
    count: 5,
    text: "naber"
}


ReactDOM.render(<App count= {8} />, document.getElementById("root"));
