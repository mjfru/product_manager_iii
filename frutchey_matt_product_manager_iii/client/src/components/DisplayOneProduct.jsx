import { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

const DisplayOneProduct = () => {
  const {id} = useParams()
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
      })
  }, [])

  const deleteHandler  = (id) => {
    axios.delete(`http://localhost:8000/api/delete/product/${id}`)
      .then((res) => {
        console.log(res)
        navigate('/');
      })
      .catch((err) => {
        console.log(err)
      })
    }
  

  return (
    <div className="border p-3">
      <h4>{product.title}</h4>
      <p className='m-1'>Retail Price: ${product.price}</p>
      <p>Description: {product.description}</p>
      <button onClick={() => deleteHandler(product._id)} className="btn btn-danger btn-sm mx-2">Delete {product.title}</button>
      <Link to={'/'} className='btn btn-primary btn-sm mx-2'>Back to Homepage</Link>
    </div>
  )
}

export default DisplayOneProduct