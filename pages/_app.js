import '../styles/globals.css'
import Layout from '@/components/layout/Layot'

function MyApp({ Component, pageProps }) {
  return <Layout> <Component {...pageProps} /></Layout>
}

export default MyApp
