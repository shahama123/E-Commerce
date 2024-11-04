import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext';
import Title from './Title';

const CartTotal = () => {
    const {  currency, delivery_fee, getCartAmount } = useContext(ShopContext);

  return (
    <div>
      <div className=" space-y-3 ">
        <div className="w-96">

        <div className="text-2xl font-medium flex justify-start">
          <Title text1={"CART"} text2={"TOTAL"} />
        </div>
        <div className="text-sm space-y-2 mt-5 ">
          <div className="flex justify-between">

          <p className="">Subtotal</p>
          <p>{currency}{getCartAmount()}.00</p>
          </div>
          <hr />
          <div className="flex justify-between ">

          <p className="">Shipping Fee</p>
          <p>{currency}{delivery_fee}.00</p>
          </div>
          <hr />
          <div className="flex justify-between">
          <b>Total</b>
          <p>{currency}{getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee }.00</p>
          </div>
        </div>
        
        </div>
      </div>
    </div>
  )
}

export default CartTotal
