import  React, {useState , useEffect}   from 'react';
import  ReactDOM  from 'react-dom';


// class App extends Component {;
//     constructor(props){
//         super(props);
//         this.state = {
//             count: 0,
//             text: ""
//         }
//     }

//     componentDidMount(){
//         console.log("component did mount");
//     }
//     componentDidUpdate(){
//         console.log("component did Update");
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
    
    // text
     useEffect(() => {
        console.log("text");
    },[text])

 // count
    useEffect(() => {
        console.log("count");

        localStorage.setItem("count: ", count)
    },[count])

    // componentDidMount
    useEffect(() => {
        console.log("componentDidMount");

        const countData = localStorage.getItem("count");

        if (countData) {
            setCount(Number(countData))
        }
    },[])

    //componentDidMount - componentDidUpdate
    useEffect(() =>{
        console.log("componentDidMount - componentDidUpdate");
    })


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
    text: "deneme"
}


ReactDOM.render(<App />, document.getElementById("root"));
