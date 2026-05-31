import React from 'react'
import BreadCrumbs from '~/components/new-arrivals/BreadCrumbs'
import ItemDetails from '~/components/new-arrivals/ItemDetails'

export default function NewArrivals() {
  return (
    <>
    <div className='px-4 md:px-8'>
       <BreadCrumbs />
    <ItemDetails />
    </div>
   
    </>
  )
}
