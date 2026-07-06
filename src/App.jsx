
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './comon-componentes/Navbar/Navbar';
import Home from './pages/homePage/home';



const App = () => {
  return (
   <div className="min-h-screen w-full overflow-x-hidden bg-white">
     <BrowserRouter>

<Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>   
   </div>     

  )
}

export default App