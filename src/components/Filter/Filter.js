import React ,{useState ,useEffect} from 'react'
import './Filter.css'
const Filter = ({setProduct,setCiy,setState ,data }) => {

  const [options ,setOptions] = useState(data)

   useEffect(()=>{
     setOptions(data)
   },[data])
   return (
    <div className='col-md-3 col-12'>
          <div className=" input-fil   ">
            <input type="text" name="filter" className='input-filter' id="" placeholder='Filters' />
              <div class="custom-select " >
                <select onChange={(e)=> setProduct(e.target.value) } >
                  <option value="Products">Products</option>
                  {options?
                    options.product.children.map(item =>(
                      <option value={item.name} >{item.name} </option>
                    )) :""
                  }
                </select>
              </div>
              <div class="custom-select " >
                <select onChange={(e)=> setState(e.target.value)} >
                  <option value="Products">State</option>
                  {options?
                    options.state.children.map(item =>(
                      <option value={item.name} >{item.name} </option>
                    )) :""
                  }
                </select>
              </div>
              <div class="custom-select " >
                <select onChange={(e)=> setCiy(e.target.value)} >
                  <option value="Products">City</option>
                  {options?
                    options.city.children.map(item =>(
                      <option value={item.name} >{item.name} </option>
                    )) :""
                  }
                </select>
              </div>
          </div>
         
        </div>
  )
}

export default Filter