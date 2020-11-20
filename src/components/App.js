import React from "react";
import "../index.css";
// import CheckList from "./CheckList";
// import Card from "./Card";
// import Header from "./Header";
// import MainContent from "./MainContent";
// import Footer from "./Footer";
// import Datte from "./Date";
// import Joke from "./Joke";
// import jokesData from "./jokesData";
// import Product from "./Product";
// import productData from "./vschoolProducts";
// import Conditional from "./Conditional";
import Form from "./FormContainer";

// function App(){
    
//     // const jokesComponent = jokesData.map(joke => < Joke key= {joke.id} question={joke.question} 
//     // punchline= {joke.punchline}/>)

//     // const productComponent = productData.map((product) => 
//     //         < Product key={product.id}
//     //             product={product}
//     // />)

//     return(
//         <div className="todo-list">
//             {/* < Card 
//                 contact = 
//                 {{name:"Mr Whiskertson",
//                 imgUrl:"public/logo192.png",
//                 phone:"Phone: (212) 332-465-234",
//                 email:"whiskers@cat.com",}}
//             />
//             < Card 
//             contact = 
//                 {{name:"Mr Whiskers",
//                 imgUrl:"public/logo192.png",
//                 phone:"(215) 332-465-234",
//                 email:"wshivermehiskers@cat.com",}}
//             />
//             < Card 
//             contact = 
//                 {{name:"Mr PaDog",
//                 imgUrl:"public/logo192.png",
//                 phone:"(213) 332-465-234",
//                 email:"howl@dog.com",}}
//             />
//             < Card 
//             contact =
//                 {{name:"Mr Dogson",
//                 imgUrl:"public/logo192.png",
//                 phone:"(214) 332-465-234",
//                 email:"ruff@dog.com",}}
//             /> */}
//             {/* < Header/>
//             < Datte/>
//             < Footer/> */}
//             {/* {jokesComponent} */}

//             {/* { productComponent } */}
//         </div>
//     )
// }

// class App extends Component {
//     render () {
//         return (
//             <div>
//                 < Header username= "Amanda"/>
//                 < Greeting/>
//             </div>
//         )
//     }
// }

// class Header extends Component {
//     render (){
//         return (
//             <header>
//                 <p>Welcome, {this.props.username} </p>
//             </header>
//         )
//     }
// }

// class Greeting extends Component {
//     render(){
//         const date = new Date()
//         const hours = date.getHours()
//         let timeOfDay

//         if (hours < 12) {
//             timeOfDay = "Morning"
//         } else if( hours >= 12 &&  hours < 17 ){
//             timeOfDay = "Afternoon"
//         }  else {
//             timeOfDay = "Night"
//         }
//         return <h1> Good {timeOfDay} to you, Sir or Madam! </h1>
//     }
// }

// class App extends Component {
        
//     constructor (){
//         super()
//         this.state = {
//             isLoggedIn: false
//         }       
//     }
        
//     render (){
//         let logged
//         if (! this.state.isLoggedIn){
//             logged = "Out"
//         } else{
//             logged = "In"
//         }
//         return (
//             <div>
//                 <h1>You are currently logged {logged} </h1>
//             </div>
//         )
//     }
// }
// class App extends Component {

//     constructor() {
//         super ()
//         this.state = {
//             count: 1
//         }
//         this.handleClick = this.handleClick.bind(this)
//         this.handleDivide = this.handleDivide.bind(this)
//     }

//     handleClick () {
//         this.setState(prevState => {
//             return {
//                 count : prevState.count * 2
//             }
//         })
//     }
//     handleDivide () {
//         this.setState(prevState => {
//             return {
//                 count: prevState.count / 2
//             }
//         })
//     }

//     render () {
//         return (
//             <div>
//                 <h1> {this.state.count} </h1>
//                 <button onClick={this.handleClick} > Multiply by 2! </button>
//                 <button onClick={this.handleDivide} > Divide by 2!</button>
//             </div>
//         )
//     }
// }

// class App extends Component {

//     constructor () {
//         super () 
//         this.state = {}
//     }

//     // componentWillMount () {

//     // } DEPRECATED

//     componentDidMount () {
//         //Get data I need to correctly display
//     }

//     static getDerivedStateFromProps (props, state) {
//         //return new updated state based upon props
//     }

//     getSnapshotBeforeUpdate () {
//         //create a backup of the current way things are
//     }

//     // componentWillReceiveProps (nextProps) {
//     //     if (nextProps.whatever !== this.props.whatever){
//     //         //do something
//     //     }
//     // } DEPRECATED

//     // componentWillUpdate () {

//     // } DEPRECATED

//     shouldComponentUpdate (nextProps, nextState) {
//         //return true if update 
//         // else return false
//     }

//     componentWillUnmount () {
//         // remove event listener       
//         // teardown or cleanup code before component disappears 
//     }

//     render () {
//         return (
//             <div>
//                 Code goes here
//             </div>
//         )
//     }
// }

// class App extends Component {

//     constructor () {
//         super ()
//         this.state = {
//             isLoading : true
//         }
//     }

//     componentDidMount () {
//         setTimeout(() => {
//             this.setState({
//                 isLoading: false
//             })
//         }, 1500)
//     }
 
//     render () {
//         return (
//             <div>
//                 {this.state.isLoading ? <h1>Wait a Minute</h1> : < Conditional /> }
//             </div>
//         )
//     }
// }

// class App extends Component {
     
//     constructor () {
//         super () 
//         this.state = {
//             unreadMessages: [
//                 "Build Projects",
//                 "Learn Python"
//             ]
//         }
//     }

//     render () {
//         return (
//             <div>
//                 {
//                     this.state.unreadMessages.length > 0 &&
//                     <h1> You have {this.state.unreadMessages.length} unread messages! </h1> 
//                 } 
//             </div>             
//         )
//     }
// }

// class App extends Component {
//     constructor () {
//         super ()
//         this.state = {
//             isLoggedIn: false
//         }
//         this.handleClick = this.handleClick.bind(this)
//     }

//     handleClick () {
//         this.setState (prevState => {
//             return {
//                 isLoggedIn: !prevState.isLoggedIn
//             }
//         })
//     }

//     render () {
//         let buttonText = this.state.isLoggedIn ? "Log Out" : "Log In";
//         let displayText = this.state.isLoggedIn ? "Logged In" : "Logged Out";
//         return (
//             <div>
//                 <h1> {displayText} </h1>
//                 <button onClick={this.handleClick} > {buttonText} </button>
//             </div>
//         )
//     }
// }

// class App extends Component {

//     constructor () {
//         super ()
//         this.state = {
//             loading: false,
//             character: {}
//         }
//     }

//     componentDidMount (){
//         this.setState ({
//             loading: true
//         })
//         fetch("https://swapi.dev/api/people/1")
//             .then(res => res.json())
//             .then(data => {
//                 this.setState({
//                     loading: false,
//                     character: data
//                 })
//             })

//     } 
    
//     render () {
//         const text = this.state.loading ? "Loading..." : this.state.character.name
//        return (
//            <div>
//                <p> {text} </p>
//            </div>
//        ) 
//     }
// }

// class App extends Component {

//     constructor () {
//         super ()
//         this.state = {
//             firstName: "",
//             lastName: "",
//             isFriendly: true,
//             gender: "",
//             favColor: "blue",
//         }
//         this.handleChange = this.handleChange.bind(this)
//     }

//     handleChange(event) {
//         const {name, value, type, checked} = event.target ;
//         type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
//     }

//     render(){
//         return (
//             <form onSubmit={this.handleSubmit} >
//                 <input 
//                     type="text" 
//                     name="firstName" 
//                     placeholder="First Name" 
//                     value={this.state.firstName}
//                     onChange={this.handleChange} 
//                 />
//                 <input 
//                     type="text" 
//                     name="lastName" 
//                     placeholder="Last Name" 
//                     value={this.state.lastName}
//                     onChange={this.handleChange} 
//                 />
//                 <textarea value={"O my Code"} onChange={this.handleChange} />
//                 < br/>
//                 <label>
//                     <input 
//                         type="checkbox" 
//                         name="isFriendly"
//                         checked={this.state.isFriendly}
//                         onChange={this.handleChange}
//                     />
//                     Is Friendly?
//                 </label>
//                 <br/>
//                 <label>
//                     <input 
//                         type="radio" 
//                         name="gender"
//                         value="male"
//                         checked={this.state.gender === "male"}
//                         onChange={this.handleChange}
//                     />
//                     Male
//                 </label>
//                 <br/>
//                 <label>
//                     <input 
//                         type="radio" 
//                         name="gender"
//                         value="female"
//                         checked={this.state.gender === "female"}
//                         onChange={this.handleChange}
//                     />
//                     Female
//                 </label>
//                <br/>
//                <label>Favorite Colour: </label> 
//                 <select 
//                     value={this.state.favColor} 
//                     onChange={this.handleChange}
//                     name="favColor"
//                 >
//                     <option value="red" >Red</option>
//                     <option value="blue" >Blue</option>
//                     <option value="green" >Green</option>
//                 </select>

//                 <h1> {this.state.firstName} {this.state.lastName} </h1>
//                 <h2> You are a {this.state.gender} </h2>
//                 <h2> Your favorite Color is {this.state.favColor} </h2>
//                 <button>Submit</button>
//             </form>
//         )
//     }
// }

const App = () => (< Form/>)

export default App;