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
						<Product product={product} />
					</div>
				}):<span>No products created</span>}
			</div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
	// Could be refactored with ISR if we use CloudFront, lambda@edge, S3
	// instead of Amplify which doesn't support ISR
  const data = await fetch('https://njaovpicbe.execute-api.us-east-2.amazonaws.com/prod/product')
	const products = await data.json();

  return {
    props: {
      products
    }
  }
}

export default Home;
