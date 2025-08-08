import './App.css'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home/Home'
import Services from './pages/services/Services'
import Casestudies from './pages/Casestudies/Casestudies'
import About from './pages/About/About'
import Contact from './pages/Contactus/Contact'


function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout><Home/></Layout>} />
      <Route path="/services" element={<Layout><Services/></Layout>} />
      <Route path="/case-studies" element={<Layout><Casestudies/></Layout>}/>
      <Route path="/about" element={<Layout><About/></Layout>}/>
      <Route path="/contact" element={<Layout><Contact/></Layout>}/>
      {/* Add more routes here as needed */}
    </Routes>
   
    </BrowserRouter>
   
  )
}

export default App
