import { GetServerSideProps } from 'next';
import type { NextPage } from 'next'
import Product from '../components/product/product'

interface Props {
	products: {
		Items: Array<ItemsTypes>;
	}
}

type ItemsTypes = {
	quantity: number;
	price: number;
	name: string;
	productId: string;
}

const Home: NextPage<Props> = (props) => {
	
	const { products: { Items } } = props;
  return (
    <div>
      <div className="grid grid-cols-4 gap-4 px-24 pt-8">
				{props.products ?Items.map((product) => {
					return <div key={product.productId} className="flex flex-col bg-white rounded-md px-4 py-8">
						<Product id={product.productId} price={product.price} quantity={product.quantity} />
					</div>
				}):<span>No products created</span>}
			</div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await fetch('https://njaovpicbe.execute-api.us-east-2.amazonaws.com/prod/product')
	const products = await data.json();

  return {
    props: {
      products
    }
  }
}

export default Home;
