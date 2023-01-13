
import './App.css';
import FunComp from './Component/FunComp';
import ClassComp from './Component/Class';
import { useState} from 'react';
function App() {
  const [show,showstate]=useState(false)
  const Change=()=>{
    showstate(!show)
  };
  const[showmore,morestate]=useState(false)
  const Handle=()=>{
   morestate(!showmore)
  };
  return (
    <div className='Container'>
      <h1 > Styling components in React </h1>
      <div className="Box">
      <button  className="Btn" onClick={Change}>Click me to see the styling of functional components</button>
     
      <button  className="Btn" onClick={Handle} >Click me to see the styling of class components</button>
      <hr></hr>
      <div className='NewDiv'>{show && <FunComp/>} 
                          {showmore && <ClassComp/>}
      </div>
</div>
</div>
  
  );
}

export default App;
