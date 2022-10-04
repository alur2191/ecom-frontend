import type { NextPage, GetServerSideProps } from 'next'
import { useEffect, useState } from 'react';
import Order from '../../components/order/order'

interface Props {
	orders:  Array<OrderTypes>;
}

type OrderTypes = {
	quantity: number;
	price: number;
	name: string;
	trackingCompany: string;
	trackingNumber: string;
	status: string;
	orderId: string;
}

const OrdersPage: NextPage<Props> = (props) => {
	const { orders } = props
  return (
    <div className='px-24 pt-8'>
			<div className='bg-white rounded-md px-10 py-2'>
				<table className='w-full'>
					<thead>
						<tr>
							<th>Order #</th>
							<th>Product</th>
							<th>Quantity</th>
							<th>Price</th>
							<th>Status</th>
						</tr>
					</thead>
					<tbody>
						{orders && orders.map((order:OrderTypes) => {
							return<tr key={order.orderId} className="bg-white rounded-md px-4 py-8">
									<Order order={order} />
								</tr>
						})}
					</tbody>
					
				</table>
			</div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await fetch('https://njaovpicbe.execute-api.us-east-2.amazonaws.com/prod/order')
	const orders = await data.json();

  return {
    props: {
      orders
    }
  }
}

export default OrdersPage
