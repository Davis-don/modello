import './layout.css'
import Header from '../header/Header'
import Footer from '../footer/Footer'

function Layout({children}: {children: React.ReactNode}) {
  return (
    <div className="layout">
        <Header/>
        <main>{children}</main>
        <Footer/>
        </div>
  )
}

export default Layout