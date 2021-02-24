import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

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
  const country = ['Bangladesh', 'india', 'Singapore', 'NewZiland', 'Itali', 'lebanon']
  const products = [
    {name: 'Laptop', price:'$300'},
    {name: 'Mobile', price:'$100'},
    {name: 'HeadPhone', price:'$10'},
    {name: 'Ipad', price:'$800'},
  ]
  const productNames = products.map(product => product.name)
  console.log(productNames);
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a React Person</p>

        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            country.map(country => <li>{country}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>
        {
          products.map(product => <Product product={product}></Product>)
        }
        <Product product={products[1]}></Product>

        {/* <Person name='Lal Mia' profession='Business'></Person>
        <Person name='Kharaj Babu' profession='Business'></Person> */}
        
      </header>
    </div>
  );
}


//Load API
function Users(){
  const [users, setUsers] = useState([])
  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  },[])
  let pdStyle = {
    boxSizing: 'border-box',
    border: '2px solid white',
    borderRadius:'5px',
    backgroundColor: 'lightgray',
    height: '200px',
    width: '200px',
    color: 'black',
    margin: '10px'
  }
  return(
    <div>
      <p>Popular User:</p>
      
        {
          users.map(user =>{
            // console.log(user.name);
            <div style={pdStyle}>
              {console.log(user.name)}
              {<h3>{user.name}</h3>}
              <h3>{user.phone}</h3>
            
            </div>
          })
        }
      
    </div>
  )
}


//use state

function Counter(){
  const [count, setCount] = useState(10)
  // const handle = () => {
  //   setCount(count + 1)
  // }
  // const decrease = () => {
  //   setCount(count-1)
  // }
  return(
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  )
}




//component
function Product(props){
  let productStyle = {
    boxSizing: 'border-box',
    border: '2px solid white',
    borderRadius:'5px',
    backgroundColor: 'lightgray',
    height: '200px',
    width: '200px',
    color: 'black',
    margin: '10px'
  }
  // console.log(props)
  //distructuring object

  const {name, price} = props.product
  return(
    <div style={productStyle}>
      <h2>{name}</h2>
      <h4>{price}</h4>
      <button>Buy Now</button>
    </div>
  )
  
}




// function Person(props){
//   return(
//     <div style={{border: '2px solid gold', width: '400px', height: '200px', margin: '10px', backgroundColor: 'lightgray'}}>
//       <h3>My Name: {props.name}</h3>
//       <p>My Profession: {props.profession}</p>
//       <button>View More</button>
//     </div>
//   )
// }





















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
