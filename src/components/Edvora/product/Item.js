import React from 'react'

const Item = ({item}) => {
  return (
    <>
         
    { item.children.map(product =>(
                  <div className="item ml-5" >
                  <a href="img/business-bg.png" data-fancybox="gallery">
                    <div className="card ">
                      <div className="card-image d-flex">
                        <div className='img-col'> 
                         <img src={require("../../../img/business-bg.png").default} className="col-6"  width="90" height="50" alt=""/>
                          <h6>{product.address.state} </h6>
                        </div>
                        <div className="card-title-product ">
                          <h6>{product.product_name} </h6>
                          <p>{product.brand_name} </p>
                          <span className='span-price'>${product.price} </span><br/>
                          <span className='span-date'>{product.date.split('-') } </span>
      
                        </div>   
                      </div>
                      <div className="Description">
                        <h4> {product.discription} </h4>
                      </div>
      
                    </div>
                  </a>
              </div>
            
            ))}
            </>
  )
}

export default Item