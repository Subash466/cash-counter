import React ,{ useState }from 'react';
import { Link } from 'react-router-dom';
import "./billAmount.css";

const BillAmount = ({billAmount}) => {
//local state
 const [localBill,setLocalBill]=useState(0);

 //variables
 const errMsg=document.getElementById("errorMsg");
 const billInput=document.getElementById("bill");

//statement to remove err msg
if(!isNaN(localBill) && localBill!==0){
  errMsg.textContent=" "
}

//function to chech user input
const check=()=>{
  errMsg.textContent="*enter valid bill value";
  billInput.value="";
  billInput.focus();
}

  return (
    <div className="bill-enter">
     <form>
       <h3>Enter the bill Amount of Customer purchases</h3>
       <label htmlFor="bill">
       <input type="text" name="bill_Amount" id="bill" onChange={(e)=>setLocalBill(e.target.value)} placeholder={`Enter bill Amount`}/>
       </label>
       <div className="error">
         <p id="errorMsg"></p>
       </div>
       {(localBill > 0)?
      <Link to="/user">
          <button onClick={()=>billAmount(localBill)}>Next</button>
      </Link>:  
       <Link to="/">
       <button onClick={check}>Next</button>
      </Link>
      }

     </form>
    </div>
  )
}

export default BillAmount
