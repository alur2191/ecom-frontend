import type { NextPage, GetServerSideProps } from 'next'
import { useState } from 'react';

interface Props {
	order: Order
}

interface Order {
	orderId: string;
	name: string;
	quantity: number;
	price: number;
	status: string;
	trackingNumber: string;
	trackingCompany: string;
}

const Order: NextPage<Props>  = (props) => {
	const[popup,setPopup] = useState<Boolean>(false)
	const { order: {name, price, quantity, status} } = props
  return (
    <div className='flex justify-center mt-10'>
			
			<div className='flex flex-col items-stretch w-80 h-80 bg-white rounded-md px-4 py-8'>
				<h1 className="text-3xl font-bold underline ">
					{name}
				</h1>
				<ul>
					<li>Price: ${price}</li>
					<li>Quantity: {quantity}</li>
					<li>Current Status: {status}</li>
				</ul>
					<form className='flex flex-col w-32'>
						<label htmlFor="status">Change Status:</label>
						<select name="status" id="status">
							<option value="delivered">Delivered</option>
							<option value="cancelled">Cancelled</option>
							<option value="processing">Processing</option>
						</select>
						<input className="mt-3" type="button" value="Save" />
					</form>
					<a className="mt-5" onClick={()=>setPopup(true)}>Change Tracking Information</a>
			</div>
			{popup ? <>
			{/* - Should be refactored with background outside of this component and with state management solution */}
			{/* <div className='dark-bg'></div> */}
			{/* - Code below can be remade into a component if we implement state management */}
			<div className='popup drop-shadow-lg bg-white w-64 p-8'>
				<div className='flex justify-between w-full space-between'>
					<h2>Tracking</h2>
					<span onClick={()=>setPopup(false)} style={{cursor: 'pointer'}}>X</span>
				</div>
				<form className='flex flex-col gap-3'>
					<div className='flex flex-col'>
						<label htmlFor="trackingCompany">Shipping Company</label>
						<input type="text" name="trackingCompany" id="trackingCompany"/>
					</div>
					<div className='flex flex-col'>
						<label htmlFor="trackingNumber">Tracking Number</label>
						<input type="text" name="trackingCompany" id="trackingCompany"/>
					</div>
					<input type="button" value="Change" />
				</form>
			</div> 
			</> : null}
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
	const { params } = context;
	const data = await fetch(`https://x552e83j33.execute-api.us-east-2.amazonaws.com/prod/order?orderId=${params?.id}`)
	const order = await data.json();
	return {
		props: {
			order: order[0]
		},
	};
}

export default Order
