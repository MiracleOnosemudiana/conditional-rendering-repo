import React,{useState} from 'react';
import data from './assets/data';
import Card from './components/Card';


const App = () => {
const [count,handleCount] = useState(0)

  const style = { 
    display:'flex',
    flexWrap:'wrap',
    gap:'10px',
  }

  const countStyle = { 
    textAlign:'center',
    color:'green',
    fontSize:'30px'
  }

  const span = { 
    color:'red',
    fontSize:'60px'
  }

  const btnStyles = { 
    display:'flex',
    justifyContent:'center',
    gap:'20px',
    marginBottom:'20px'
  }
  console.log(data)
  return (
    <>
      <p style={countStyle}>count -- <span style={span}>  {count} </span> </p>
     
      <div style = {btnStyles}>
           <button
           onClick = {() => handleCount(count + 1)}
           >+</button>
           <button
           onClick = {() => handleCount((prevCount) => prevCount -1)}
           >-</button>
           <button
           onClick = {() => handleCount(c => c = 0)}
           >res</button>
      </div>
    <div style={style}>
       { 
          data.map((user)  => (
            <div key = {user.name}>
           <Card user = {user}/>
           </div>
          )) 
      }
    </div>

    </>
  );
}

export default App;
