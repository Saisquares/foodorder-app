import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AccordianBody from './AccordianBody'
import { clearCart, removeItem } from '../utils/cartSlice'
import { useNavigate } from 'react-router-dom'

const CartItems = () => {
    const cartItems = useSelector((store) => store.cart.items)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleClearCart = () => {
        dispatch(clearCart());
        navigate('/');
    }
    const handleRemoveItem = () => {
        dispatch(removeItem())
        if(cartItems.length === 0 || null){
            navigate('/');
        }
        
    }

   
  return (
    <div className='text-center mx-auto w-9/12'>
        <div>
        <h1 className='font-bold m-4 p-4 text-2xl '>Cart</h1>
        <div>
            <button className=' bg-black text-white rounded  my-4 p-2' onClick={handleClearCart}>
                Clear Cart
            </button>
            <button className=' bg-black text-white rounded mx-3 my-4 p-2' onClick={handleRemoveItem}>
               Remove Item
            </button>
        </div>
        </div>
        <div>
        <AccordianBody listIems={cartItems}/>
        </div>
        
    </div>
  )
}

export default CartItems