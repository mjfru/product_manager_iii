/* eslint-disable react/prop-types */
import { useState } from 'react'
import axios from 'axios'

const ProductForm = (props) => {
  const [ title, setTitle ] = useState("");
  const [ price, setPrice ] = useState("");
  const [ description, setDescription ] = useState("");
  const { products, setProducts } = props

  const onSubmitHandler = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/api/add/product', {
      title,
      price,
      description
    })
    .then(res => {
      console.log(res);
      console.log(res.data)
      setTitle("");
      setPrice("");
      setDescription("");
      setProducts([...products, res.data])
    })
    .catch(err => console.log(err))
  }
  return (
    <form onSubmit={onSubmitHandler} className='col-3 mx-auto'>
      <p>
        <label className="form-label">Product Name: </label><br/>
        <input type="text" value={title} name="title" className="form-control" onChange={(e) => setTitle(e.target.value)} /> 
      </p>
      <p>
        <label className="form-label">Price: </label><br/>
        <input type="number" value={price} step={0.01} name="price" className="form-control" onChange={(e) => setPrice(e.target.value)} />
      </p>
      <p>
        <label className="form-label">Product Description: </label><br/>
        <input type="text" value={description} name="description" className="form-control" onChange={(e) => setDescription(e.target.value)} />
      </p>
      <input type="submit" value="Add Product" className='btn btn-primary'/>
    </form>
  )

}
export default ProductForm;