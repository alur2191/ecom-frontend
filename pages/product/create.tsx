import type { NextPage, GetServerSideProps } from 'next'
import Router from "next/router";
import React, { useState } from 'react';


const CreateProduct: NextPage = () => {
	const [name, setName] = useState('')
	const [price, setPrice] = useState(null || String)
	const [quantity, setQuantity] = useState(null || String)

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
	
		switch(e.target.name) {
			case "name":
				return setName(e.target.value)
			case "price":
				return setPrice(e.target.value)
			case "quantity":
				return setQuantity(e.target.value)
		}
	};

	const submitData = async (e:React.FormEvent) => {
		e.preventDefault()
		try {
			const body = { name, price, quantity}
			console.log(body);
			const createProduct = await fetch(`https://njaovpicbe.execute-api.us-east-2.amazonaws.com/prod/product/`, {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(body),
			});

			console.log(createProduct)
			// await Router.push(id ? `/jobs/${id}` : `/`);
		} catch (error) {
			console.error(error);
		}
};
  return (
    <div className='flex justify-center mt-10'>
			<div className='w-80 h-100 bg-white rounded-md px-10 py-8'>
				<h1 className="text-3xl font-bold underline ">
					Create Product
				</h1>
				<form className='flex flex-col gap-3' onSubmit={submitData}>
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
					<input type="submit" value="Create" />
				</form>
			</div>
    </div>
  )
}


export default CreateProduct
