/* eslint-disable no-sequences */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect } from 'react';
import './App.css';
import Edvora from './components/Edvora/Edvora';
import Filter from './components/Filter/Filter';
import { Data } from './components/Data';
function App() {

  const [arr,setArr]= useState({})


  const[product,setProduct] = useState('')
  const[city,setCiy] = useState('')
  const[state,setState] = useState('')
  
   useEffect(()=>{
    fetch("https://assessment-edvora.herokuapp.com").then((res)=>res.json()).then((json)=>{
      setArr(json)
    }).catch(err=>setArr(err))
   },[product,city,state])

    const GroupData = (d)=>{
      let g = Object.entries(d.reduce((r,c)=>(r[c.brand_name]=[...r[c.brand_name]|| [],c ],r ) ,{} ))
      return g.reduce((r,c) =>(r.children.push({name:c[0],children:c[1]}) ,r ),{name:"children array",children:[]})
    }
   
    const x =  GroupData(Object.values(arr)) 
    
    const productNames = (d )=>{
      let g = Object.entries(d.reduce((r,c)=>(r[c.product_name ]=[...r[c.product_name]|| [],c ],r ) ,{} ))
      return g.reduce((r,c) =>(r.children.push({name:c[0]}) ,r ),{children:[]})
    }
    const states = (d )=>{
      let g = Object.entries(d.reduce((r,c)=>(r[c.address.state ]=[...r[c.address.state]|| [],c ],r ) ,{} ))
      return g.reduce((r,c) =>(r.children.push({name:c[0]}) ,r ),{children:[]})
    }
    const cityies = (d )=>{
      let g = Object.entries(d.reduce((r,c)=>(r[c.address.city ]=[...r[c.address.city ]|| [],c ],r ) ,{} ))
      return g.reduce((r,c) =>(r.children.push({name:c[0]}) ,r ),{children:[]})
    }
    
    const dataoptions = {
      product: productNames(Object.values(arr) ),
      state: states(Object.values(arr) ),
      city : cityies(Object.values(arr) ),
    }
   console.log(Object.values(arr) )

  return (
    
      <div className='row '>
        <Filter setProduct ={setProduct} setCiy={setCiy} setState= {setState} data={dataoptions} />
        <Edvora products ={x.children} product={product} city={city} state={state} />
      </div>
  
  );
}

export default App;
