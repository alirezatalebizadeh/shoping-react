import React, { useContext } from 'react'
import './Cart.css'
import { BsBag } from 'react-icons/bs'
import { AiOutlineClose } from 'react-icons/ai'
import ProductContext from '../../Contexts/ProductContext'

export default function Cart() {

    const contextData = useContext(ProductContext)

    return (
        <aside className={`bag-sidebar ${contextData.isShowCart ? 'active' : ''}`}>{/*add active class to show bag sidebar */}
            <h3 className='bag-title'>
                <span>
                    <BsBag />Bag
                </span>
                <span>
                    <AiOutlineClose
                        onClick={() => {
                            contextData.setIsShowCart(false)
                        }}
                        className='close-icon' />
                </span>
            </h3>
            <div className='row bag-wrapper'>
                {contextData.userCart.map((product) => (
                    <div key={product.id} className='cart npy-3 px-3'>
                        <div className='col-12 text-center'>
                            <img src='./images/phone.png' alt='phone' />
                        </div>
                        <div className='card-body d-flex flex-column justify-content-center align-items-center'>
                            <p className='card-text'>{product.title}</p>
                            <p className='price'> {product.price}$ </p>
                            <br />
                            <a className='btn btn-danger' href='#0'>Buy</a>
                            <a className='btn btn-outline-dark mt-3 text-capitalize' href='#0'>more information</a>
                            <p className='number'>{product.Count}</p>
                        </div>
                    </div>
                ))}
            </div>
        </aside>
    )
}
