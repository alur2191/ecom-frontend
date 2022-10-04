import Link from "next/link"

type Props = {
	id: string;
	price: number;
	quantity: number;
}

const Product = (props: Props) => {
	const { id, price, quantity } = props
  return (
    <>
			<h2><Link href={`/product/${id}`}><a>Product title</a></Link></h2>
			<div>Quantity: {quantity}</div>
			<div>Price: ${price}</div>
    </>
  )
}

export default Product
