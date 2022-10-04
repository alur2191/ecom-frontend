import type { AppProps } from 'next/app'
import Layout from '../components/layout/layout'
import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
			<Layout>
				<Component {...pageProps}/>
			</Layout>
	)
}

export default MyApp
