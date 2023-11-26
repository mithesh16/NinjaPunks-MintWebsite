import React,{useState} from 'react'
import "./product.css"
import {data} from "./classic";

import {ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { animateScroll as scroll} from 'react-scroll';

const ethers = require("ethers")

const Product = ({isconnected,contract,owner}) => {

  const [drop,setDrop]=useState('classic')
  const togglehome=()=>{
    scroll.scrollToTop();
}
const mint=async(ninja)=>{
  console.log("works")
  try{
  if(isconnected===true){
    console.log(contract)
  let cost=ninja.price;
  const tx=await contract.mint(
    ninja.url,
    {value:ethers.utils.parseEther(cost.toString())})
    console.log(tx)
    if(tx){
    toast.success('Minted', {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });}
}
  else{
   toast.warn("Not connected", {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    });
  }
 }
catch(err){
  toast.warn(err.code, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    fontsize:13,
    });

}
}

const listItems = data[drop].map((item,index) =>
  <div className="card" key={index}> 
        <div className='profiles'>
          <div className='profile'>
            <img src={item.thumb} className="prod-img" alt="profilepic"/>
            <h3 className='name'>{item.name}</h3>
            <br/>
            <h5>{item.type} {item.rating}</h5>
            <h5>{item.price} ETH</h5>
            <div className='btnwrap'>
            <button className='mintbtn' value={item.id} onClick={()=>mint(item)}>Mint</button> 
            </div>
</div>
</div>
<ToastContainer position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark" />
<ToastContainer
position="bottom-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>

</div>


);


const options = [
  { value: 'classic', label: 'Classic' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'akatsuki', label: 'Akatsuki' }
]
function handleItem(e){
  setDrop(e.target.value)

}

  return (
    <div className='products'>
      <div>
  <div className='drop-down'>      
  <select value={drop} onChange={handleItem} placeholder='Drop'>
        <option value="classic">Classic</option>
        <option value="akatsuki">Akatsuki</option>
      </select>

      </div>
         <div className='container'>
      {listItems}
    </div>
    </div>
    <button className="toTop" onClick={togglehome}>^</button>
    </div>
 

  )
}

export default Product