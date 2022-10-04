import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="flex flex-row w-full items-center mx-auto px-24 py-4 border-b border-grey-300 bg-white drop-shadow">
			<h3 id="logo" className="flex-auto">
				<Link href="/">
					logo
				</Link>
			</h3>
			<ul className="flex justify-end space-x-6">
				<li>
					<Link href="/product/create">
						<a>Create Product</a>
					</Link>
				</li>
				<li>
					<Link href="/orders">
						<a>Orders</a>
					</Link>
				</li>
			</ul>
    </nav>
  )
}

export default Navbar
