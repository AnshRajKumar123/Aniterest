import React from 'react'
import Navbar from './ComponentJSX/Navbar'
import Home from './ComponentJSX/Home'
import { Route, Routes } from 'react-router-dom'
import Footer from './ComponentJSX/Footer'
import Explore from './ExploreCjsx/Explore'
import ExploreImageM from './ExploreCjsx/ExploreImageM'
import ScrollToTop from './ComponentJSX/ScrollToTop'
import { ToastContainer } from 'react-toastify'
import Collection from './ComponentJSX/Collection'
import About from './ComponentJSX/About'
import SplashScreen from './ComponentJSX/SplashScreen'

const App = () => {
  return (
    <div className='MainBGColor'>
      <ScrollToTop />
      <ToastContainer
        position="bottom-right"   // 👈 options: top-right, top-center, top-left, bottom-right, bottom-center, bottom-left
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"              // 👈 options: light, dark, colored
      />

      <SplashScreen />

      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/explore' element={<Explore />} />
        <Route path='/explore/:category' element={<ExploreImageM />} />
        <Route path='/collection' element={<Collection />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App