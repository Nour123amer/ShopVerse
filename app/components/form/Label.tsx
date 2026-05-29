import { Label } from '~/components/ui/label'


type LabelFeatures ={
    htmlFor:string,
    className:string,
    children:React.ReactNode
}
export default function FormLabel(data:LabelFeatures) {
  return (
    <Label htmlFor={data.htmlFor} className={data.className}>
      {data.children}
    </Label>
  )
}
