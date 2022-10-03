import type { NextPage } from 'next'
import Product from '../components/product/product'

const Home: NextPage = () => {
  return (
    <div>
      <div className="grid grid-cols-4 gap-4 px-24 pt-8">
				<Product id={0} />
				<Product id={0} />
				<Product id={0} />
				<Product id={0} />
			</div>
    </div>
  )
}

export default Home
