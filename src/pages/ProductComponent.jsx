import React from 'react'

const ProductComponent = ({data}) => {
  
  return (
    
    <div  className='border p-5'>
    <h3>{data.productName}</h3>
    <h6 className='mt-4'>Ingredients:</h6>
    <p className='ingredients-text-size'>
        {data.ingredients}
        <br />
    </p>
    <h5>
        Rating : {data.healthScore}/10
    </h5>

 
    </div>
  )
}

export default ProductComponent