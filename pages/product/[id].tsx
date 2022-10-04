import type { NextPage, GetServerSideProps } from 'next'

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
const Product: NextPage<Props> = (props) => {
	console.log(props)
	const { name, price, quantity } = props.product.Items[0]
	console.log(name);
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
				<form className='flex flex-col gap-3'>
					<div>
						<label htmlFor="quantity">Quantity: </label>
						<input type="number" name="quantity" id="quantity" placeholder="0" style={{width: 80}}/>
					</div>
					<input type="submit" value="Buy" />
				</form>
			</div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
	const { params } = context;
	const data = await fetch(`https://njaovpicbe.execute-api.us-east-2.amazonaws.com/prod/product?productId=${params?.id}`)
	const product = await data.json();
	return {
		props: {
			product: product
		},
	};
}

export default Product
