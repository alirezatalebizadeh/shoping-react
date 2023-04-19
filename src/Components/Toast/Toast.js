import React, { useContext } from 'react'
import './Toast.css'
import ProductContext from '../../Contexts/ProductContext'

export default function Toast() {
    const contextData = useContext(ProductContext)

    return (
        <div className='toast-container position-fixed bottom-0 me-4 end-0 mb-4'>
            <div className={`toast ${contextData.isShowToast ? 'show' : ''}  align-items-center text-white bg-primary`}>{/*add show class to show toast */}
                <div className='d-flex justify-content-between align-items-center'>
                    <div className='toast-body'>محصول با موفقیت به سبد خرید افزوده شد</div>
                    <button onClick={() => {
                        contextData.setIsShowToast(false)
                    }} type='button' className='btn-close btn-close-wsite ms-3'></button>
                </div>
            </div>
        </div>
    )
}
