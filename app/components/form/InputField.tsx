import { Input } from "../ui/input"

type InputFeatures={
    type:React.HTMLInputTypeAttribute,
    placeholder:string,
    name: string,
    id:string,
    value:string,
    className:string,
    onChange:(e:React.ChangeEvent<HTMLInputElement>)=>void
}

export default function InputField(data:InputFeatures) {
  return (
    <Input 
    onChange={data.onChange}
    value={data.value} type={data.type} name={data.name} placeholder={data.placeholder} id={data.id} />
  )
}
