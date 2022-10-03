import Link from "next/link"

const Order = (props: {id: number}) => {
  return (
			<tr>
				<td><Link href={`/orders/${props.id}`}><a>#123</a></Link></td>
				<td>Product titleProduct</td>
				<td>Quantity Product</td>
				<td>Total Product Product</td>
				<td>Statu Product Product</td>
			</tr>
			
  )
}

export default Order