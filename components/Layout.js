import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <>

      <Navbar />
      <hr />
      {children}
      <hr />

      <Footer />
    </>
  )
}
