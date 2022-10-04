import { Fragment } from "react"
import Navbar from "./navbar"
import Head from 'next/head'

const Layout = (props: { children: JSX.Element }) => {
  return (
		<Fragment>
			<Head>
				<title>Case Study - eCommerce Shopping Cart MVP</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<Navbar />
			<main>
				{props.children}
			</main>
		</Fragment>
  )
}

export default Layout
