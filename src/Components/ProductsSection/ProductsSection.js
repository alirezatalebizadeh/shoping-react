import React, { useContext } from 'react'
import './ProductsSection.css'
import ProductContext from '../../Contexts/ProductContext'

export default function ProductsSection({ title, infos }) {

    const contextData = useContext(ProductContext)

    const addToCart = product => {
        contextData.setIsShowToast(true)
        setTimeout(() => {
            contextData.setIsShowToast(false)
        }, 3000)

        let isInUserCart = contextData.userCart.some(bagProduct => {
            return bagProduct.title === product.title
        })
        // add product to cart
        if (!isInUserCart) {
            let newUserCartProduct = {
                id: contextData.userCart.length + 1,
                title: product.title,
                price: product.price,
                Count: 1
            }

            contextData.setUserCart(prevProduct => {
                return [...prevProduct, newUserCartProduct]
            })
        }
        else {
            let userCart = [...contextData.userCart]


            //Way one=> plus count when product in cart
            // userCart.some(bagProduct => {
            //     if (bagProduct.title === product.title) {
            //         bagProduct.Count += 1
            //         return true
            //     }
            // })
            // contextData.setUserCart(userCart)


            //Way two => plus count when product in cart
            let newUserCart = userCart.map(bagProduct => {
                if (bagProduct.title === product.title) {
                    bagProduct.Count += 1
                }
                return bagProduct
            })
            contextData.setUserCart(newUserCart)

        }
    }

    return (
        <>
            {
                contextData.allProducts.map(productSection => (
                    <div className='row justify-content-center mt-5'>
                        <h3 className='text-center'>{productSection.title}</h3>

                        {productSection.infos.map(product => (
                            <div key={product.id} className='col-xl-3 col-lg-4 col-md-5 col-sm-10 mt-5'>
                                <div className='card py-3 px-3'>
                                    <div className='col-12 text-center'>
                                        <img className='img' src={product.img} alt='product-photo' />
                                    </div>
                                    <div className='card-body text-center'>
                                        <p className='card-text'>{product.title}</p>
                                        <p className='price'>{product.price} $</p>
                                        <br />
                                        <a href='#0' className='btn btn-danger'
                                            onClick={() => addToCart(product)}
                                        >Add To Card</a>
                                        <a href='#0' className='btn btn-outline-dark mt-3 text-capitalize'>
                                            For Information
                                        </a>
                                        <p className='number'>Number: {product.Count}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ))
            }
        </>

    )
}
