import React ,{ useState }from 'react';
import { Link } from 'react-router-dom';
import "../Bill_Amount/billAmount.css";

const GivenAmount = ({givenAmount}) => {
  //local state
  const [givenAmountLocal,setGivenAmountLocal]=useState(0);

  //variables
  const errMsg=document.getElementById("errorMsg");
  const gIvenInput=document.getElementById("given");
 
  //statement to remove err msg
  if(!isNaN(givenAmountLocal) && givenAmountLocal!==0){
    errMsg.textContent=" "
  }
  
  //function to chech user input
  const check=()=>{
    errMsg.textContent="*enter valid amount";
    gIvenInput.value="";
    gIvenInput.focus();
  }
  

  return (
    <div className="bill-enter">
    <form>
      <h3>Enter the given Amount from Customer</h3>
      <label htmlFor="given">
      <input type="text" name="given_Amount" id="given" onChange={(e)=>{setGivenAmountLocal(e.target.value)}} placeholder={`Enter given Amount`}/>
      </label>
      <div className="error">
         <p id="errorMsg"></p>
       </div>
      <div className="click">
      <Link to="/" >
         <button>Back</button>
     </Link>  
     {(givenAmountLocal > 0)?
      <Link to="/balance" className="rightButton">
          <button  onClick={()=>givenAmount(givenAmountLocal)}>Next</button>
      </Link>:  
       <Link to="/user" className="rightButton">
       <button  onClick={check}>Next</button>
      </Link>
      }
     </div>
    </form>
   </div>
  )
}

export default GivenAmount
