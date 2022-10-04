import Link from "next/link"

type Props = {
	product:{
		productId: string;
		name: string;
		price: number;
		quantity: number;
	}
}

const Product = (props: Props) => {
	const { productId, name, price, quantity } = props.product
  return (
    <>
			<h2><Link href={`/product/${productId}`}><a>{name}</a></Link></h2>
			<div>Quantity: {quantity}</div>
			<div>Price: ${price}</div>
    </>
  )
}

export default Product
