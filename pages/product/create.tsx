import type { NextPage } from 'next'
import React, { useEffect, useState } from 'react';

interface ErrorMessage {
	text: string,
	type: string
}

const CreateProduct: NextPage = () => {
	const [name, setName] = useState<string>('')
	const [price, setPrice] = useState<number | null>(null)
	const [quantity, setQuantity] = useState<number | null>(null)
	const [message, setMessage] = useState<ErrorMessage>({ text:'', type:'' })

	useEffect(()=>{
		if(message.text){
			setTimeout(() => {
				setMessage({ text:'', type:'' })
			}, 5000)
		}
	},[])

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		switch(e.target.name) {
			case "name":
				return setName(e.target.value)
			case "price":
				return setPrice(parseInt(e.target.value))
			case "quantity":
				return setQuantity(parseInt(e.target.value))
		}
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		try {
			const body = { name, price, quantity}
			const createProduct = await fetch(`https://x552e83j33.execute-api.us-east-2.amazonaws.com/prod/product/`, {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(body),
			})

			if(createProduct.ok) setMessage({text:'Product has been created', type:'success'})
		} catch (error) {
			setMessage({text:'Something went wrong. Unable to create a product', type:'error'})
		}
	};

  return (
    <div className='flex justify-center mt-10'>
			<div className='w-80 h-100 bg-white rounded-md px-10 py-8'>
				<h1 className="text-3xl font-bold underline ">
					Create Product
				</h1>
				<form className='flex flex-col gap-3' onSubmit={handleSubmit}>
					<div className="flex flex-col">
						<label htmlFor="name">Name</label>
						<input type="text" name="name" id="name" onChange={(e) => handleInputChange(e)}/>
					</div>
					<div className="flex flex-col">
						<label htmlFor="price">Price</label>
						<input type="number" name="price" id="price" onChange={(e) => handleInputChange(e)}/>
					</div>
					<div className="flex flex-col">
						<label htmlFor="quantity">Quantity</label>
						<input type="number" name="quantity" id="quantity" onChange={(e) => handleInputChange(e)}/>
					</div>
					<div style={message.text ? {display:'block'} : {display:'none'}}>
						<span style={message.type === 'success' ? {color:'green'} : {display:'red'}}>{message.text}</span>
					</div>
					<input type="submit" value="Create" />
				</form>
			</div>
    </div>
  )
}


export default CreateProduct
