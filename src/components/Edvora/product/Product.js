import React, { useEffect ,useState } from 'react'
import Item from './Item'
import './Product.css'
const Product = ({item ,product ,state ,city}) => {

  const filterData = (d)=>{
    let g = Object.entries(d.reduce((r,c)=>
    (
      r[ state&& state!=="State" ? c.address.state === state :"null"  || 
       (product && product!=="Products")?  c.product_name === product :"null"   
       || (city&& city!=="City") ? c.address.city === city :"null" 
      ] =
      [...r[state&& state!=="State" ? c.address.state === state :"null"   
        &&  (product && product!=="Products") ?  c.product_name ===product :"null" && (city&& city!=="City") ? c.address.city === city :"null"       ]   || [],c ],r 
    ) ,{} 
    ))
    return g.reduce((r,c) =>(r.children.push({name:c[0],children:c[1]}) , r ),{children:[]})
  }
  let optionsData  ;
   
  useEffect(()=>{
    if(product || state || city){
      filterData(item.children)
  
    }
  })
  if(product || state || city){
    optionsData= filterData(item.children)

  }

  return (
    <>
 {  optionsData === undefined ? 
 
 <div className="product ">
    <h5>{item.name} </h5> 
    <hr />

    <div className='products products-carsoul'style={{paddingInline:"20px" }}>
    <section className="gallary-slider pt-3 pb-3 " >
         <div className="owl-carousel owl-theme gallary-slide owl-loaded owl-drag "  >
           <Item item = {item} />:
     </div>
 </section>
 
    </div>
 </div> :<>
 <div div className="product ">

 
        <h5>{item.name} </h5> 
        <hr />
        <div className='products products-carsoul'style={{paddingInline:"20px"  }}>
    <section className="gallary-slider pt-3 pb-3 " >
    <div className="owl-carousel owl-theme gallary-slide owl-loaded owl-drag" >
    {
       Object.values( optionsData.children)[0].name === "true"?
      
                     
                        <Item item={Object.values( optionsData.children)[0] }/>
                   
                     :"No Data"

     }
     </div>
       
 </section>
 </div>
    
 </div>
 
 </>}
 </>
  )
}

export default Product