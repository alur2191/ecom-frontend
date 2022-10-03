import Link from "next/link"

const Product = (props: {id: number}) => {
  return (
    <div className="bg-white rounded-md px-4 py-8">
			<h2><Link href={`product${props.id}`}><a>Product title</a></Link></h2>
			<div>Quantity: 110</div>
			<div>Price: $1,019</div>
    </div>
  )
}

export default Product
