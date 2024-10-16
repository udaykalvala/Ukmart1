import React from 'react'
import { Routes, Route } from 'react-router-dom'

import './App.css'
import LandingPage from './stores/pages/LandingPage'
import MobilePage from './stores/pages/MobilePage'
import FurniturePage from './stores/pages/FurniturePage'
import FridgePage from './stores/pages/FridgePage'
import AcPage from './stores/pages/AcPage'
import WatchPage from './stores/pages/WatchPage'
import MenPage from './stores/pages/MenPage'
import TvPage from './stores/pages/TVPage'
import WomanPage from './stores/pages/WomanPage'
import KitchenPage from './stores/pages/KitchenPage'
import ComputerPage from './stores/pages/ComputerPage'
import MobileSingle from './stores/singles/MobileSingle'
import UserCart from './stores/UserCart'
import ComputerSingle from './stores/singles/ComputerSingle'
import FurnitureSingle from './stores/singles/FurnitureSingle'
import KitchenSingle from './stores/singles/KitchenSingle'
import AcSingle from './stores/singles/AcSingle'
import MenSingle from './stores/singles/MenSingle'
import WatchSingle from './stores/singles/WatchSingle'
import WomanSingle from './stores/singles/WomanSingle'
import FridgeSingle from './stores/singles/FridgeSingle'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage />}/>
        <Route path='/mobiles' element={<MobilePage />}/>
        <Route path='/furniture' element={<FurniturePage />} />
        <Route path='/fridge' element={<FridgePage />} />
        <Route path='/ac' element={<AcPage />} />
        <Route path='/watches' element={<WatchPage />} />
        <Route path='/men' element={<MenPage />} />
        <Route path='/tv' element={<TvPage />} />
        <Route path='/woman' element={<WomanPage />} />
        <Route path='/kitchen' element={<KitchenPage />} />
        <Route path='/computer' element={<ComputerPage />} />

            <Route path='/mobiles/:id' element={<MobileSingle/>}/>
            <Route path='/cart' element={<UserCart/>}/>
            <Route path='/ac/:id' element = {<AcSingle />} />
      <Route path='/computers/:id' element = {<ComputerSingle />} />
      <Route path='/furniture/:id' element = {<FurnitureSingle />} />
      <Route path='/kitchen/:id' element = {<KitchenSingle />} />
      <Route path='/men/:id' element = {<MenSingle />} />
      <Route path='/watch/:id' element = {<WatchSingle />} />
      <Route path='/woman/:id' element = {<WomanSingle />} />
      <Route path='/fridge/:id' element = {<FridgeSingle />} />


















      </Routes>
    </div>
  )
}

export default App