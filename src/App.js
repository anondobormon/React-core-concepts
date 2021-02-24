import logo from './logo.svg';
import './App.css';

function App() {
  // let person ={
  //   name:  'Dr. Dinesh Chandraw',
  //   job: 'Poim'
  // }
  // let person2 = {
  //   name: 'Eva Hasan',
  //   job: 'Singer'
  // }
  // let style = {
  //   color: 'red',
  //   backgroundColor: 'yellow'
  // }
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a React Person</p>
        <Product></Product>

        <Person name='Lal Mia' profession='Business'></Person>
        <Person name='Kharaj Babu' profession='Business'></Person>
        
      </header>
    </div>
  );
}

function Product(Props){
  const productStyle = {
    border: '2px solid white',
    borderRadius:'5px',
    backgroundColor: 'lightgray',
    height: '200px',
    width: '200px',
    color: 'black'
  }
  return(
    <div style={productStyle}>
      <h2>Name:</h2>
      <h4>Price: </h4>
      <button>Buy Now</button>
    </div>
  )
  
}




function Person(props){
  return(
    <div style={{border: '2px solid gold', width: '400px', height: '200px', margin: '10px', backgroundColor: 'lightgray'}}>
      <h3>My Name: {props.name}</h3>
      <p>My Profession: {props.profession}</p>
      <button>View More</button>
    </div>
  )
}





















// function App() {
//   // let person ={
//   //   name:  'Dr. Dinesh Chandraw',
//   //   job: 'Poim'
//   // }
//   // let person2 = {
//   //   name: 'Eva Hasan',
//   //   job: 'Singer'
//   // }
//   // let style = {
//   //   color: 'red',
//   //   backgroundColor: 'yellow'
//   // }
//   return (
//     <div className="App">
//       <header className="App-header">
//         {/* <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <h3 style={style}>{person.name + ' ' + person.job}</h3>
//         <h3 style={style}>{person2.name + ' ' + person2.job}</h3> */}
        
//         <p>I am a React Person</p>
//         <Person name='Sarot Chandraw' food='Banana' gari='Gorurgari'></Person>
//         <Person name='Chuni babu' food='Guava' gari='Cycle'></Person>
//       </header>
//     </div>
//   );
// }


// function Person(props){
//   let style = {
//     width: '250px',
//     height: '200px',
//     border: '2px solid gray',
//     borderRadius: '5px',
//     margin: '10px'
//   }
//   console.log(props)
//   return (
//     <div style={style}>
//       <h3>Name: {props.name + ' ' + props.food}</h3>
//       <h4>They are more intersting charecter</h4>
//     </div>
//   )
// }

export default App;
