import React from 'react';
import './balanceAmount.css';
import { Link } from 'react-router-dom';

const BalanceAmount = ({bill,given}) => {
  //variables
  let totalBalance=given-bill;
  let balanceAmount=given-bill;
  let note_2000,note_500,note_200,note_100,note_50,note_20,note_10,note_5,note_2,note_1;
  let money_2000,money_500,money_200,money_100,money_50,money_20,money_10,money_5,money_2,money_1;
 
 //statement to find correct balance note
  if(balanceAmount >= 2000){
     note_2000=Math.floor(balanceAmount/2000);
     money_2000=note_2000*2000;
     balanceAmount=balanceAmount-money_2000;
  }
  if(balanceAmount >= 500){
    note_500=Math.floor(balanceAmount/500);
    money_500=note_500*500;
    balanceAmount=balanceAmount-money_500;
 }
 if(balanceAmount >= 200){
  note_200=Math.floor(balanceAmount/200);
  money_200=note_200*200;
  balanceAmount=balanceAmount-money_200;
}
 if(balanceAmount >= 100){
  note_100=Math.floor(balanceAmount/100);
  money_100=note_100*100;
  balanceAmount=balanceAmount-money_100;
}
if(balanceAmount >= 50){
  note_50=Math.floor(balanceAmount/50);
  money_50=note_50*50;
  balanceAmount=balanceAmount-money_50;
}
if(balanceAmount >= 20){
  note_20=Math.floor(balanceAmount/20);
  money_20=note_20*20;
  balanceAmount=balanceAmount-money_20;
}
if(balanceAmount >= 10){
  note_10=Math.floor(balanceAmount/10);
  money_10=note_10*10;
  balanceAmount=balanceAmount-money_10;
}
if(balanceAmount >= 5){
  note_5=Math.floor(balanceAmount/5);
  money_5=note_5*5;
  balanceAmount=balanceAmount-money_5;
}
if(balanceAmount >= 2){
  note_2=Math.floor(balanceAmount/2);
  money_2=note_2*2;
  balanceAmount=balanceAmount-money_2;
}
if(balanceAmount >= 1){
  note_1=Math.floor(balanceAmount/1);
  money_1=note_1*1;
  balanceAmount=balanceAmount-money_1;
}


  return (
    <div className="balance">
    <div className="balance-container">
      <h1>Balance Amount</h1>
      <div className="inputGiven">
       <p>Bill Amount : <span>{bill}</span></p>
       <p>Given amount : <span>{given}</span></p>
      </div>
      <div className="balance-details">
       <table>
         <tr>
           <th>Rs</th>
           <th>Count</th>
           <th>Total</th>
         </tr>
         <tbody>
         {(note_2000)&&
         <tr>
         <td>2000</td>
         <td>{note_2000}</td>
         <td>{money_2000}</td>
         </tr>
         }
         {(note_500)&&
         <tr>
         <td>500</td>
         <td>{note_500}</td>
         <td>{money_500}</td>
         </tr>}
         {(note_200)&&
          <tr>
          <td>200</td>
          <td>{note_200}</td>
          <td>{money_200}</td>
          </tr>
          }
          {(note_100)&&
         <tr>
         <td>100</td>
         <td>{note_100}</td>
         <td>{money_100}</td>
         </tr>
         }
         {(note_50)&&
         <tr>
         <td>50</td>
         <td>{note_50}</td>
         <td>{money_50}</td>
         </tr>
         }
         {(note_20)&&
         <tr>
         <td>20</td>
         <td>{note_20}</td>
         <td>{money_20}</td>
         </tr>
         }
         {(note_10)&&
         <tr>
         <td>10</td>
         <td>{note_10}</td>
         <td>{money_10}</td>
         </tr>
         }
         {(note_5)&&
         <tr>
         <td>5</td>
         <td>{note_5}</td>
         <td>{money_5}</td>
         </tr>
         }
         {(note_2)&&
         <tr>
         <td>2</td>
         <td>{note_2}</td>
         <td>{money_2}</td>
         </tr>
         }
         {(note_1)&&
         <tr>
         <td>1</td>
         <td>{note_1}</td>
         <td>{money_1}</td>
         </tr>
         }
          {(totalBalance>0)&&
         <tr>
         <td ></td>
         <th>Balance</th>
         <td>{totalBalance}</td>
         </tr>
         }
      </tbody>
      </table>
      <div className="finish">
      <Link to="/" >
         <button>Finish</button>
     </Link>  
      </div>
     </div>
    </div>
    </div>
  )
}

export default BalanceAmount
