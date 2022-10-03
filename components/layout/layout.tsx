import { Fragment } from "react"
import Navbar from "./navbar"

const Layout = (props: { children: JSX.Element }) => {
  return (
		<Fragment>
			<Navbar />
			<main>
				{props.children}
			</main>
		</Fragment>
  )
}

export default Layout
