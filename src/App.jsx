import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navber from './component/Navber/Navber'
import Banner from './component/Banner/Banner'
import Recipes from './component/Recipe/Recipes'
import LoadRecipe from './component/Recipe/LoadRecipe'

function App() {
  const [count, setCount] = useState(0)

  return (
    < >
      <div className="mx-auto w-11/12">
      <Navber></Navber>
      <Banner></Banner>
      <Recipes></Recipes>
      
      {/* Load Data */}
      <LoadRecipe></LoadRecipe>
      </div>
    </>
  )
}

export default App
