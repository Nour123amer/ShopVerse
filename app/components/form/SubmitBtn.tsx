import React from 'react'
import { Button } from '../ui/button'

type ButtonFeatures ={
    type?:React.ButtonHTMLAttributes<HTMLButtonElement>["type"],
    className?:string,
    onClick?:()=> void,
    disabled?:boolean,
    children:React.ReactNode
}

export default function SubmitBtn(data:ButtonFeatures) {
  return (
    <Button type={data.type} className={data.className} onClick={data.onClick} disabled={data.disabled}>
         {data.children}
    </Button>
  )
}
