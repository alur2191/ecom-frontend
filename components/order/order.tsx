import Link from "next/link"

type Props = {
	order:{
		orderId: string;
		name: string;
		price: number;
		quantity: number;
		status: string;
	}
}

const Order = (props:Props) => {
	const{ orderId, name, price, quantity, status } = props.order

  return (
			<>
				<td><Link href={`/orders/${orderId}`}><a>{orderId}</a></Link></td>
				<td>{name}</td>
				<td>{quantity}</td>
				<td>{price}</td>
				<td>{status}</td>
			</>
			
  )
}

export default Order