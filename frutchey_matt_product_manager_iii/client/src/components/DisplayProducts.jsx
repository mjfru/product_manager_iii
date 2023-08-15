/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const DisplayProducts = (props) => {
  const { products, setProducts } = props;
  const navigate = useNavigate()
  console.log(props)
  
  useEffect(() => {
    axios.get('http://localhost:8000/api/products')
      .then((response) => {
        setProducts(response.data)
        console.log(response.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  
  const deleteHandler = (id) => {
    axios.delete(`http://localhost:8000/api/delete/product/${id}`)
      .then((res) => {
        console.log(res)
        setProducts(previousProductList => previousProductList.filter(product => product._id !== id))
        navigate('/')
      })
      .catch((err) => {
        console.log(err)
      }) 
  }

  return (
    <>
      <h3 className='mt-5 mb-3'>All Products:</h3>
      <div className='d-flex flex-wrap justify-content-between'>
        {
          products.map((product) => (
            <div key={product._id} className='border m-2 p-3'>
              <h4>{product.title}</h4>
              {/* <Routes> */}
                {/* <Route path="/product/:id" element={<DisplayOneProduct/>}>Details</Route> */}
                <Link to={`/product/${product._id}`} className='btn btn-success'>Details</Link>
                <Link to={`/update/product/${product._id}`} className='btn btn-info mx-2'>Edit</Link>
              {/* </Routes> */}
              <button onClick={() => deleteHandler(product._id)} className='btn btn-danger'>Delete</button>
            </div>
          ))
        }
      </div>
    </>
  )
}
export default DisplayProducts