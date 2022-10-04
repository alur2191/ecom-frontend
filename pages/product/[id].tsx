import type { NextPage, GetServerSideProps } from 'next'
import { useEffect, useState } from 'react';

interface Props {
	product: Product
}

interface Product {
	Items: Array<Items>;
}
interface Items {
	productId: string;
	name: string;
	quantity: number;
	price: number;
}

interface ErrorMessage {
	text: string,
	type: string
}

const Product: NextPage<Props> = (props) => {
	const { name, price, quantity } = props.product.Items[0]
	const [inputQuantity, setQuantity] = useState<number | null>(null)
	const [message, setMessage] = useState<ErrorMessage>({ text:'', type:'' })

	useEffect(()=>{
		if(message.text){
			setTimeout(() => {
				setMessage({ text:'', type:'' })
			}, 5000)
		}
	}, [])

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		return setQuantity(parseInt(e.target.value))
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		try {
			const body = { name, price, quantity: inputQuantity}
			const createOrder = await fetch(`https://x552e83j33.execute-api.us-east-2.amazonaws.com/prod/order/`, {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(body),
			})
			if(createOrder.ok) setMessage({text:'Order has been created', type:'success'})
		} catch (error) {
			setMessage({text:'Something went wrong. Unable to create a Order', type:'error'})
		}
	};

  return (
    <div className='flex justify-center mt-10'>
			<div className='flex flex-col items-center gap-3 w-80 h-80 bg-white rounded-md px-4 py-8'>
				<h1 className="text-3xl font-bold underline ">
					{name}
				</h1>
				<ul className='flex flex-col items-center gap-3'>
					<li>Price: ${price}</li>
					<li>Quantity: {quantity}</li>
				</ul>
				<form className='flex flex-col gap-3' onSubmit={handleSubmit}>
					<div>
						<label htmlFor="quantity">Quantity: </label>
						<input 
							type="number" 
							name="quantity" 
							id="quantity" 
							placeholder="0" 
							style={{width: 80}} 
							onChange={handleInputChange}/>
					</div>
					<div style={message.text ? {display:'block'} : {display:'none'}}>
						<span style={message.type === 'success' ? {color:'green'} : {display:'red'}}>{message.text}</span>
					</div>
					<input type="submit" value="Buy"/>
				</form>
			</div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
	const { params } = context;
	const data = await fetch(`https://x552e83j33.execute-api.us-east-2.amazonaws.com/prod/product?productId=${params?.id}`)
	const product = await data.json();

	return {
		props: {
			product: product
		},
	};
}

export default Product
