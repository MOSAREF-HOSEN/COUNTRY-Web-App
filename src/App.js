
import './App.css';

import Parson from './components/Parson/Parson';
import Header from './components/Header/Header';
import Country from './components/Country/Country';


function App() {
  return (
    <div className="App">
      
      <Header></Header>
     {/* <Parson></Parson> */}
     <Country></Country>
    </div>
  );
}


 
// function Country(){
//   const [countrys, setCountrys] = useState([])
//   useEffect(()=>{
//     fetch('https://restcountries.com/v3.1/all')
//     .then(res=>res.json())
//     .then(data =>setCountrys(data))
//   },[])

//   return(
//     <div>
//       <h3>avelebol countrys : {countrys.length}</h3>
//       {
//         countrys.map(country => <Count name={country.name.common} flage={country.flags.png}></Count>)
//       }
//     </div>
//   )
// }

// function Count(props){
//   // console.log(props)
//   return (
//     <div className='container'>
    
//       <img src={props.flage} alt="" />
//       <h2>Namei: {props.name}</h2>
//       <p>Lorem ipsum dolor sit amet.</p>
     
     
//     </div>
//   )
// }

export default App;
