import React from 'react'
import CartList from '~/components/cart/CartList'
import OrderSummary from '~/components/cart/OrderSummary'
import RecommendedProducts from '~/components/cart/RecommendationProduct'

export default function Cart() {
    return (
        <>
            <div className='max-w-7xl mx-auto'>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 items-start py-6'>
                <CartList />
                <OrderSummary />
            </div>

            <RecommendedProducts />
            </div>
        </>
    )
}
