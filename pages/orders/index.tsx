import type { NextPage } from 'next'
import Order from '../../components/order/order'

const OrderPage: NextPage = () => {
  return (
    <div className='px-24 pt-8'>
			<div className='bg-white rounded-md px-10 py-2'>
				<table className='w-full'>
					<tr>
						<th>Order #</th>
						<th>Product</th>
						<th>Quantity</th>
						<th>Total</th>
						<th>Shipping</th>
					</tr>
					<Order id={2} />
					<Order id={2} />
					<Order id={2} />
				</table>
			</div>
    </div>
  )
}

export default OrderPage
