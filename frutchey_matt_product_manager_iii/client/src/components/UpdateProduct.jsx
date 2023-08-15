import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const UpdateProduct = () => {
  const {id} = useParams();
  const [ product, setProduct ] = useState({})
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8000/api/product/${id}`)
      .then((res) =>{
        console.log(res.data)
        setProduct(res.data)
      })
      .catch((err) => {
        console.log(err)
      });
    }, [])
  
  const updateHandler = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:8000/api/update/product/${id}`, product)
      .then((res) => {
        console.log(res)
        navigate('/')
      })
      .catch((err) => {
        console.log(err)
      })
  }
  

  return (
    <form  onSubmit={updateHandler} className='col-10 mx-auto'>
      <h2>Edit {product.title}</h2>
      <p>
        <label className='form-label'>Product Name: </label><br/>
        <input type="text" value={product.title} name="title" className='form-control' onChange={(e) => setProduct({title: e.target.value})} />
      </p>
      <p>
        <label className='form-label'>Price: </label><br/>
        <input type='number'  value={product.price} step={0.01} name='price' className='form-control' onChange={(e) => setProduct({price: e.target.value})} />
      </p>
      <p>
        <label className='form-label'>Product Description: </label><br/>
        <input type="text" value={product.description} name='description' className='form-control' onChange={(e) => setProduct({description: e.target.value})} />
      </p>
      <input type="submit" value="Edit Product" className="btn btn-primary"/>
      <Link to={'/'} className='btn btn-outline-primary m-3'>Back to Homepage</Link>
    </form>
  )
}

export default UpdateProduct;